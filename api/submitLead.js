export default async function handler(req, res) {
  console.log('API called with method:', req.method);
  console.log('Request headers:', req.headers);
  console.log('Request body:', req.body);

  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    console.log('Handling OPTIONS request');
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    console.log('Method not allowed:', req.method);
    return res.status(405).json({ status: 'error', message: 'Method not allowed' });
  }

  try {
    // Validate request body
    if (!req.body) {
      console.log('No request body provided');
      return res.status(400).json({ status: 'error', message: 'No data provided' });
    }

    const formData = req.body;
    console.log('Form data received:', formData);

    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'interest'];
    const missingFields = requiredFields.filter(field => !formData[field] || formData[field].trim() === '');
    
    if (missingFields.length > 0) {
      console.log('Missing required fields:', missingFields);
      return res.status(400).json({ 
        status: 'error', 
        message: `Missing required fields: ${missingFields.join(', ')}` 
      });
    }

    const GAS_URL = 'https://script.google.com/macros/s/AKfycbzTwleZC7WPPm-aKBGi50UHBSRYryKEGoyeCvNXuY_6tFruTn1QZmx8u64FcpW4u6zvqQ/exec';
    
    console.log('Attempting to send to Google Apps Script...');
    console.log('GAS URL:', GAS_URL);
    console.log('Data to send:', JSON.stringify(formData));

    // Add timeout and better error handling for the fetch
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

    let response;
    try {
      response = await fetch(GAS_URL, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
        signal: controller.signal
      });
      clearTimeout(timeoutId);
    } catch (fetchError) {
      clearTimeout(timeoutId);
      console.error('Fetch to GAS failed:', fetchError);
      
      if (fetchError.name === 'AbortError') {
        throw new Error('Request to Google Apps Script timed out');
      }
      throw new Error(`Failed to connect to Google Apps Script: ${fetchError.message}`);
    }

    console.log('GAS response status:', response.status);
    console.log('GAS response headers:', Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      console.log('GAS returned non-OK status:', response.status);
      const errorText = await response.text();
      console.log('GAS error response:', errorText);
      throw new Error(`Google Apps Script returned ${response.status}: ${errorText}`);
    }

    const responseText = await response.text();
    console.log('GAS response text:', responseText);

    let data;
    try {
      data = JSON.parse(responseText);
      console.log('Parsed GAS response:', data);
    } catch (parseError) {
      console.error('Failed to parse GAS response as JSON:', parseError);
      console.log('Raw response that failed to parse:', responseText);
      throw new Error('Google Apps Script returned invalid JSON response');
    }

    // Return the response from Google Apps Script
    console.log('Sending success response to client');
    res.status(200).json(data);

  } catch (error) {
    console.error('API error details:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
    
    res.status(500).json({ 
      status: 'error', 
      message: `Server error: ${error.message}`,
      timestamp: new Date().toISOString()
    });
  }
}
