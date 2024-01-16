import React, { useState } from 'react';

const CicilanBank = () => {
  const [nominal, setNominal] = useState('');
  const [bunga, setBunga] = useState('');
  const [result, setResult] = useState('');
  const [option, setOption] = useState('');

  const calculateCicilan = () => {
    const nominalPinjam = parseFloat(nominal);
    const sukuBunga = parseFloat(bunga) / 100 / 12;
    const periodCicilan = parseFloat(option);

    const bayar = (nominalPinjam * sukuBunga) / (1 - Math.pow(1 + sukuBunga, -periodCicilan));
    setResult(bayar.toFixed(2));
  };

  return (
    <div className="container">
      <div className='Card'>
        <h1 className="header">Cicilan Bank</h1>

        <div className="input-container">
          <label htmlFor="nominalInput">Nominal</label>
          <input
            id="nominalInput"
            type="number"
            value={nominal}
            onChange={(e) => setNominal(e.target.value)}
          />
        </div>

        <div className="input-container">
          <label htmlFor="bungaInput">Bunga</label>
          <input
            id="bungaInput"
            type="number"
            value={bunga}
            onChange={(e) => setBunga(e.target.value)}
          />
        </div>

        <div className="options">
          <label htmlFor="conversionOption">Period</label>
          <select
            className='select'
            id="conversionOption"
            value={option}
            onChange={(e) => setOption(e.target.value)}
          >
            <option value="3">3 Bulan</option>
            <option value="6">6 Bulan</option>
            <option value="12">12 Bulan</option>
          </select>
        </div>

        <button className='button' onClick={calculateCicilan}>Hitung</button>

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

export default CicilanBank;