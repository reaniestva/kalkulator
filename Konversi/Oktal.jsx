import React, { useState } from 'react';
// import './Oktal.css';

const Oktal = () => {
  const [option, setOption] = useState('10');
  const [oktal, setOktal] = useState('');
  const [result, setResult] = useState('');

  const convertToDecimal = () => {
    setResult(parseInt(oktal, 8).toString(10));
  };

  const convertToBinary = () => {
    setResult(parseInt(oktal, 8).toString(2));
  };

  const convertToHexadecimal = () => {
    setResult(parseInt(oktal, 8).toString(16).toUpperCase());
  };

  const convert = () => {
    if (option === '10') {
      convertToDecimal();
    } else if (option === '2') {
      convertToBinary();
    } else if (option === '16') {
      convertToHexadecimal();
    }
  };

  return (
    <div className="container">
        <div className='Card'>
      <h1 className="header">Konversi Bilangan Oktal</h1>

      <div className="input-container">
        <label htmlFor="oktalInput">Masukkan Angka Oktal</label>
        <input
          id="oktalInput"
          type="text"
          value={oktal}
          onChange={(e) => setOktal(e.target.value)}
          placeholder="Contoh: 17"
          className="input"
        />
      </div>

      <div className="options">
        <label htmlFor="conversionOption">Pilih Konversi</label>
        <br></br>
            <select className='select'
            id="conversionOption"
            value={option}
            onChange={(e) => setOption(e.target.value)}
            >
                <option value="10">Desimal</option>
                <option value="2">Biner</option>
                <option value="16">Hexadesimal</option>
            </select>
      </div>

      <button className='button' onClick={convert}>Convert</button>

      <div className="result">
      <p>Result: </p>
        <div className='hasil'>
        <h3>{result}</h3>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Oktal;