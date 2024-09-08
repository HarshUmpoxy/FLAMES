import React, { useState } from 'react';
import './css/Calculator.css'; // CSS for animation

const FLAMES_MEANING = {
  F: 'Friendship',
  L: 'Love',
  A: 'Affair',
  M: 'Marriage',
  E: 'Enemy',
  S: 'Sister',
};

const FlamesCalculator = () => {
  const [boyName, setBoyName] = useState('');
  const [girlName, setGirlName] = useState('');
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const calculateFlames = () => {
    setIsLoading(true);
    setResult('');
    setTimeout(() => {
        const flamesResult = getFlamesResult(boyName, girlName);
        setResult(flamesResult);
        setIsLoading(false);
    }, 1000); // Loading animation for 1 second
  };

  const getFlamesResult = (boyName, girlName) => {
    let combined = boyName + girlName;
    let flames = 'FLAMES'.split('');
    let index = 0;

    while (flames.length > 1) {
      index = (index + combined.length - 1) % flames.length;
      flames.splice(index, 1);
    }

    return FLAMES_MEANING[flames[0]];
  };

  return (
    <div className="flames-calculator">
      <input
        type="text"
        placeholder="Boy's Name"
        value={boyName}
        onChange={(e) => setBoyName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Girl's Name"
        value={girlName}
        onChange={(e) => setGirlName(e.target.value)}
      />
      <button onClick={calculateFlames}>Calculate</button>
      {isLoading && <div className="loading-animation">Loading...</div>}
      {result && <div className="result">Result: {result}</div>}
    </div>
  );
};

export default FlamesCalculator;
