import React, { useState } from 'react';

const Hexa = () => {
  const [option, setOption] = useState('10');
  const [hexa, setHexa] = useState('');
  const [result, setResult] = useState('');

  const convertToDecimal = () => {
    setResult(parseInt(hexa, 16).toString(10));
  };

  const convertToBinary = () => {
    setResult(parseInt(hexa, 16).toString(2));
  };

  const convertToOktal = () => {
    setResult(parseInt(hexa, 16).toString(8).toUpperCase());
  };

  const convert = () => {
    if (option === '10') {
      convertToDecimal();
    } else if (option === '2') {
      convertToBinary();
    } else if (option === '8') {
      convertToOktal();
    }
  };

  return (
    <div className="container">
        <div className='Card'>
      <h1 className="header">Konversi Bilangan Hexadesimal</h1>

      <div className="input-container">
        <label htmlFor="hexaInput">Masukkan Angka Hexadesimal</label>
        <input
          id="hexaInput"
          type="text"
          value={hexa}
          onChange={(e) => setHexa(e.target.value)}
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
                <option value="8">Oktal</option>
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

export default Hexa;