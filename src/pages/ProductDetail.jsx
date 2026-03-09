import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import AddStockModal from "../components/AddStockModal";

export default function ProductDetail() {
  const { name } = useParams();
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);

  const data = [
    {
      sku: "UHT01",
      buy: "2 MAR 2025",
      qty: "1 PCS",
      exp: "4 MAR 2026",
      status: "AKAN KEDALUWARSA",
      color: "bg-red-100 text-red-600",
      highlight: true,
    },
    {
      sku: "UHT02",
      buy: "5 NOV 2025",
      qty: "12 PCS",
      exp: "9 AUG 2028",
      status: "STOK TERSEDIA",
      color: "bg-green-100 text-green-600",
    },
    {
      sku: "UHT03",
      buy: "5 NOV 2025",
      qty: "12 PCS",
      exp: "9 AUG 2028",
      status: "STOK TERSEDIA",
      color: "bg-green-100 text-green-600",
    },
  ];

  return (
    <div className="bg-[#f6f3ef] min-h-screen">
      {/* ALERT */}
      <div className="bg-[#5b2e0f] text-white px-10 py-3 flex justify-between items-center text-sm">
        <p>
          ⚠ Peringatan Penting: Terdapat 5 bahan yang akan segera kadaluwarsa
          dan 2 bahan dengan stok rendah. Segera lakukan pengecekan.
        </p>

        <button className="bg-orange-500 px-6 py-2 rounded-md hover:bg-orange-600">
          Cek Sekarang
        </button>
      </div>

      {/* CONTAINER */}
      <div className="max-w-[1300px] mx-auto px-10 py-10">
        {/* BACK */}
        <button
          onClick={() => navigate(-1)}
          className="text-2xl mb-6 text-gray-700"
        >
          ←
        </button>

        {/* TITLE */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-[38px] font-bold text-gray-800">{name}</h1>

            <p className="text-[#c47a3d] mt-1 text-[15px]">Detail Produk</p>
          </div>

          <div className="flex gap-4">
            <button className="flex items-center gap-2 border border-[#e8e2da] bg-white px-6 py-3 rounded-xl text-sm font-medium">
              ⬇ Ekspor Laporan
            </button>

            <button
              onClick={() => setOpenModal(true)}
              className="flex items-center gap-2 bg-[#F97316] text-white px-6 py-3 rounded-xl text-sm font-medium"
            >
              + Tambah Stok
            </button>
          </div>
        </div>

        {/* STATUS CARDS */}
        <div className="grid grid-cols-4 gap-6 mb-10">
          <Card title="STOK HABIS" value="1" color="red" icon="!" />

          <Card title="STOK RENDAH" value="2" color="yellow" icon="⚠" />

          <Card title="STOK TERSEDIA" value="5" color="green" icon="✓" />

          <Card title="SEGERA KEDALUWARSA" value="4" color="orange" icon="⏱" />
        </div>

        {/* TABLE */}
        <div className="bg-[#f8f5f2] border border-[#e8e2da] rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="text-xs text-[#9c7c5b] uppercase">
              <tr className="border-b border-[#e5ded6]">
                <th className="text-left px-8 py-5">SKU PRODUK</th>
                <th className="text-left px-8 py-5">TANGGAL BELI</th>
                <th className="text-left px-8 py-5">JUMLAH</th>
                <th className="text-left px-8 py-5">TANGGAL EXPIRED</th>
                <th className="text-left px-8 py-5">STATUS</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, i) => (
                <tr
                  key={i}
                  className={`border-t border-[#e5ded6] ${
                    item.highlight ? "bg-[#f2ede7]" : ""
                  }`}
                >
                  <td className="px-8 py-6 font-semibold">{item.sku}</td>

                  <td className="px-8 py-6">{item.buy}</td>

                  <td className="px-8 py-6">{item.qty}</td>

                  <td className="px-8 py-6">{item.exp}</td>

                  <td className="px-8 py-6">
                    <span
                      className={`px-4 py-1 rounded-full text-xs font-semibold ${item.color}`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="px-8 py-6 flex justify-end gap-3">
                    <button className="border border-orange-500 text-orange-500 px-5 py-2 rounded-xl text-sm">
                      Perbarui
                    </button>

                    <div className="w-9 h-9 border border-[#ddd] rounded-full flex items-center justify-center text-gray-400">
                      ⋮
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* FOOTER */}
          <div className="flex justify-between items-center px-8 py-4 text-sm text-gray-500 border-t border-[#e5ded6]">
            <p>Menampilkan 1-7 dari 15 bahan</p>

            <div className="flex gap-2">
              <button className="w-9 h-9 border rounded-lg">‹</button>

              <button className="w-9 h-9 bg-orange-500 text-white rounded-lg">
                1
              </button>

              <button className="w-9 h-9 border rounded-lg">›</button>
            </div>
          </div>
        </div>
      </div>

      {openModal && <AddStockModal closeModal={() => setOpenModal(false)} />}
    </div>
  );
}

function Card({ title, value, icon, color }) {
  const colors = {
    red: "bg-red-100 text-red-500",
    yellow: "bg-yellow-100 text-yellow-600",
    green: "bg-green-100 text-green-600",
    orange: "bg-orange-100 text-orange-500",
  };

  return (
    <div className="bg-white border border-orange-300 rounded-2xl px-6 py-6 flex justify-between items-center">
      <div>
        <p className="text-xs text-gray-500 uppercase">{title}</p>

        <p className="text-3xl font-bold mt-1">{value}</p>
      </div>

      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${colors[color]}`}
      >
        {icon}
      </div>
    </div>
  );
}
