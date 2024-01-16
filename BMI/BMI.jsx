import React, { useState } from 'react';

const BMI = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [ket, setKet] = useState('');

  const calcBmi = (event) => {
    event.preventDefault();

    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height');
    } else {
      const calculatedBmi = (weight / Math.pow(height, 2)) * 10000;
      setBmi(calculatedBmi.toFixed(1));

      if (calculatedBmi < 18.5) {
        setKet('Underweight');
      } else if (calculatedBmi >= 18.5 && calculatedBmi < 25) {
        setKet('Healthy Weight');
      } else if (calculatedBmi >= 25 && calculatedBmi < 30) {
        setKet('Overweight');
      }
    }
  };

  return (
    <div className="container">
      <div className="Card">
        <h1 className="header">Body Mass Index</h1>

        <div className="input-container">
          <label htmlFor="weightInput">Berat (kg)</label>
          <input
            id="weightInput"
            type="number"
            value={weight}
            onChange={(event) => setWeight(event.target.value)}
            className="input"
          />
        </div>

        <div className="input-container">
          <label htmlFor="heightInput">Tinggi (cm)</label>
          <input
            id="heightInput"
            type="number"
            value={height}
            onChange={(event) => setHeight(event.target.value)}
            className="input"
          />
        </div>

        <button className="button" onClick={calcBmi}>
          Hitung
        </button>

        <div className="result">
          <p>Hasil</p>
          <div className="hasil">
            <p className='bmi'>{bmi}</p>
            <h6 className='ket'>{ket}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMI;