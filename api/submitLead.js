export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const formData = req.body;

      
      const GAS_URL = 'https://script.google.com/macros/s/AKfycbyiue5U81lZ2BNXgQOPlHd74uCe3wglVwtGOCvwaiwqixofWu1FTNWla73C6AhtjiAxOQ/exec';

      const response = await fetch(GAS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'error', message: 'Server error' });
    }
  } else {
    res.status(405).json({ status: 'error', message: 'Method not allowed' });
  }
}

