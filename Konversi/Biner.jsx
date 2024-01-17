import React, { useState } from 'react';

const Biner = () => {
  const [option, setOption] = useState('10');
  const [biner, setBiner] = useState('');
  const [result, setResult] = useState('');

  const convertToDecimal = () => {
    setResult(parseInt(biner, 2). toString(10));
  };

  const convertToOktal = () => {
    setResult(parseInt(biner, 2).toString(8));
  };

  const convertToHexadecimal = () => {
    setResult(parseInt(biner, 2).toString(16).toUpperCase());
  };

  const convert = () => {
    if (option === '10') {
      convertToDecimal();
    } else if (option === '8') {
      convertToOktal();
    } else if (option === '16') {
      convertToHexadecimal();
    }
  };

  return (
    <div className="container">
        <div className='Card'>
            <h1 className="header">Konversi Bilangan Biner</h1>

      <div className="input-container">
        <label htmlFor="binerInput">Masukkan Angka Biner</label>
        <input
          id="binerInput"
          type="text"
          value={biner}
          onChange={(e) => setBiner(e.target.value)}
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
                <option value="8">Oktal</option>
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

export default Biner;