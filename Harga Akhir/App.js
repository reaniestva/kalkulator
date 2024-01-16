import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [pembelian, setPembelian] = useState('');
  const [ppn, setPpn] = useState('');
  const [diskon, setDiskon] = useState('');
  const [hargaAkhir, setHargaAkhir] = useState(null);

  const hitungHargaAkhir = () => {
    const pembelianValue = parseFloat(pembelian);
    const ppnValue = parseFloat(ppn);
    const diskonValue = parseFloat(diskon);

    if (isNaN(pembelianValue) || isNaN(ppnValue) || isNaN(diskonValue)) {
      alert('Harap masukkan angka yang valid.');
      return;
    }

    const ppnAmount = pembelianValue * (ppnValue / 100);
    const diskonAmount = pembelianValue * (diskonValue / 100);
    const hargaAkhirValue = pembelianValue + ppnAmount - diskonAmount;

    setHargaAkhir(hargaAkhirValue.toFixed(2));
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header red-background">
          <h4 className="mb-0 text-white">Hitung Harga Akhir</h4>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <label className="form-label">Pembelian</label>
            <input
              type="text"
              className="form-control"
              value={pembelian}
              onChange={(e) => setPembelian(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">PPN (%)</label>
            <input
              type="text"
              className="form-control"
              value={ppn}
              onChange={(e) => setPpn(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Diskon (%)</label>
            <input
              type="text"
              className="form-control"
              value={diskon}
              onChange={(e) => setDiskon(e.target.value)}
            />
          </div>
          <button className="btn btn-danger" onClick={hitungHargaAkhir}>
            Hitung Harga Akhir
          </button>
          {hargaAkhir !== null && (
            <div className="mt-4">
              <h6>Harga Akhir: {hargaAkhir}</h6>
            </div>
          )}
        </div>
      </div>
      {/* Gaya CSS untuk mengubah warna latar belakang dan teks tombol */}
      <style>
        {`
          .red-background {
            background-color: red;
            padding: 10px;
          }

          .btn-danger {
            background-color: red;
            border-color: red;
          }

          .btn-danger:hover {
            background-color: darkred;
            border-color: darkred;
          }
        `}
      </style>
    </div>
  );
}

export default App;

