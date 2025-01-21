import React from 'react';

export default function Task12() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 9, 10];

  return (
    <div>
      <div>
        <h1>Even Numbers</h1>
        <ul>
          {numbers
            .filter((number) => number % 2 === 0) 
            .map((number, index) => (
              <li key={index}>Even:{number}</li> 
            ))}
        </ul>
      </div>

      <div>
        <h1>Odd Numbers</h1>
        <ul>
          {numbers
            .filter((number) => number % 2 !== 0) 
            .map((number, index) => (
              <li key={index}>odd:{number}</li> 
            ))}
        </ul>
      </div>
    </div>
  );
}

