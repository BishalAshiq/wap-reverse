"use client"
import { useState } from 'react';

const ReverseString = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const reversedStr = input.split('').reverse().join('');
    const isPalindrome = input === reversedStr;

    setResult({ reversedStr, isPalindrome });
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