import React, { useState } from 'react';
// import './Oktal.css';

const Desimal = () => {
  const [option, setOption] = useState('10');
  const [desimal, setDesimal] = useState('');
  const [result, setResult] = useState('');

  const convertToOktal = () => {
    setResult(parseInt(desimal, 10).toString(8));
  };

  const convertToBinary = () => {
    setResult(parseInt(desimal, 10).toString(2));
  };

  const convertToHexadecimal = () => {
    setResult(parseInt(desimal, 10).toString(16).toUpperCase());
  };

  const convert = () => {
    if (option === '10') {
      convertToOktal();
    } else if (option === '2') {
      convertToBinary();
    } else if (option === '16') {
      convertToHexadecimal();
    }
  };

  return (
    <div className="container">
        <div className='Card'>
            <h1 className="header">Konversi Bilangan Desimal</h1>

      <div className="input-container">
        <label htmlFor="oktalInput">Masukkan Angka Desimal</label>
        <input
          id="desimalInput"
          type="text"
          value={desimal}
          onChange={(e) => setDesimal(e.target.value)}
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
                <option value="8">Oktal</option>
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

export default Desimal;