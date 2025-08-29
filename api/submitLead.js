export default async function handler(req, res) {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    try {
      console.log('Received form data:', req.body); // Debug log
      
      const formData = req.body;
      
      const GAS_URL = 'https://script.google.com/macros/s/AKfycbzJfIgKvXlwh2WY-oO6vnkAYU-LlEE53SYO9kGIkWT0YFttCQpt852j360xh-RZJrVulA/exec';
      
      console.log('Sending to Google Apps Script...'); // Debug log
      
      const response = await fetch(GAS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      console.log('GAS response status:', response.status); // Debug log
      
      const responseText = await response.text();
      console.log('GAS response text:', responseText); // Debug log
      
      let data;
      try {
        data = JSON.parse(responseText);
      } catch (parseError) {
        console.error('JSON parse error:', parseError);
        throw new Error('Invalid response from Google Apps Script');
      }

      res.status(200).json(data);
    } catch (error) {
      console.error('API error:', error);
      res.status(500).json({ 
        status: 'error', 
        message: 'Server error: ' + error.message 
      });
    }
  } else {
    res.status(405).json({ status: 'error', message: 'Method not allowed' });
  }
}
