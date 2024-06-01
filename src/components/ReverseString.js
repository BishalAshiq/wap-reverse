"use client"
import { useState } from 'react';

const ReverseString = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await fetch('/api/reverse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ str: input }),
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await res.json();
      setResult(data);
    } catch (error) {
      setError('Failed to fetch the data. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a string"
          required
        />
        <button type="submit">Submit</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {result && (
        <div>
          <p><strong>Reversed String:</strong> {result.reversedStr}</p>
          <p><strong>Is Palindrome:</strong> {result.isPalindrome ? 'Yes' : 'No'}</p>
        </div>
      )}
    </div>
  );
};

export default ReverseString;