"use client"
import { useState } from 'react';

const ReverseString = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/reverse', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ str: input }),
    });

    const data = await res.json();
    setResult(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a string"
        />
        <button type="submit">Submit</button>
      </form>

      {result && (
        <div>
          <p>Reversed String: {result.reversedStr}</p>
          <p>
            Is Palindrome: {result.isPalindrome ? 'Yes' : 'No'}
          </p>
        </div>
      )}
    </div>
  );
};

export default ReverseString;