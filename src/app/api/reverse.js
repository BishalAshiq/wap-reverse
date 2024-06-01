export default function handler(req, res) {
    if (req.method === 'POST') {
      const { str } = req.body;
  
      if (typeof str !== 'string') {
        return res.status(400).json({ error: 'Invalid input' });
      }
  
      const reversedStr = str.split('').reverse().join('');
      const isPalindrome = str === reversedStr;
  
      res.status(200).json({ reversedStr, isPalindrome });
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  }