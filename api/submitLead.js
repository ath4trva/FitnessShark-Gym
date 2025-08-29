export default async function handler(req, res) {
  console.log('API called with method:', req.method);
  console.log('Request body:', req.body);

  if (req.method !== 'POST') {
    console.log('Method not allowed:', req.method);
    return res.status(405).json({ status: 'error', message: 'Method not allowed' });
  }

  try {
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

    // UPDATE THIS URL WITH YOUR NEW DEPLOYMENT URL
    const GAS_URL = 'https://script.google.com/macros/s/AKfycbwBIVkVM5ku-t49Nri3usR5RfPwqIRUV_ISC8XnqHobiYNchsiyCG29p7OBphobkqU44A/exec';
    
    console.log('Sending to Google Apps Script...');

    const response = await fetch(GAS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    console.log('GAS response status:', response.status);
    
    const responseText = await response.text();
    console.log('GAS response text:', responseText);

    // Parse JSON response
    let data;
    try {
      data = JSON.parse(responseText);
      console.log('Parsed GAS response:', data);
    } catch (parseError) {
      console.error('Failed to parse JSON response:', parseError);
      console.log('Raw response:', responseText);
      throw new Error('Google Apps Script returned invalid response');
    }

    console.log('Sending response to client:', data);
    res.status(200).json(data);

  } catch (error) {
    console.error('API error:', error);
    res.status(500).json({ 
      status: 'error', 
      message: `Server error: ${error.message}` 
    });
  }
}

