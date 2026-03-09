import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function ProductDetail() {
  const { name } = useParams();
  const navigate = useNavigate();

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
      <div className="bg-[#5b2e0f] text-white px-12 py-3 flex justify-between items-center text-sm">
        <p>
          ⚠ Peringatan Penting: Terdapat 5 bahan yang akan segera kadaluwarsa
          dan 2 bahan dengan stok rendah. Segera lakukan pengecekan.
        </p>

        <button className="bg-orange-500 px-5 py-2 rounded-md">
          Cek Sekarang
        </button>
      </div>

      <div className="px-14 py-10">
        {/* BACK */}
        <button onClick={() => navigate(-1)} className="text-3xl mb-4">
          ←
        </button>

        {/* TITLE + ACTION */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">{name}</h1>

            <p className="text-[#c47a3d] mt-1">Detail Produk</p>
          </div>

          <div className="flex gap-4">
            <button className="border border-gray-300 bg-white px-6 py-3 rounded-xl text-sm flex items-center gap-2">
              ⬇ Ekspor Laporan
            </button>

            <button className="bg-orange-500 text-white px-6 py-3 rounded-xl text-sm flex items-center gap-2">
              + Tambah Stok
            </button>
          </div>
        </div>

        {/* STATUS CARDS */}
        <div className="grid grid-cols-4 gap-6 mb-10">
          {/* CARD */}
          <div className="bg-white border border-orange-400 rounded-2xl px-6 py-6 flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Stok Habis
              </p>

              <p className="text-3xl font-bold mt-1">1</p>
            </div>

            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-500 text-xl">
              !
            </div>
          </div>

          <div className="bg-white border border-orange-400 rounded-2xl px-6 py-6 flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Stok Rendah
              </p>

              <p className="text-3xl font-bold mt-1">2</p>
            </div>

            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 text-xl">
              ⚠
            </div>
          </div>

          <div className="bg-white border border-orange-400 rounded-2xl px-6 py-6 flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Stok Tersedia
              </p>

              <p className="text-3xl font-bold mt-1">5</p>
            </div>

            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xl">
              ✓
            </div>
          </div>

          <div className="bg-white border border-orange-400 rounded-2xl px-6 py-6 flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Segera Kedaluwarsa
              </p>

              <p className="text-3xl font-bold mt-1">4</p>
            </div>

            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 text-xl">
              ⏱
            </div>
          </div>
        </div>

        {/* TABLE */}
        <div className="bg-white border border-[#e8e2da] rounded-2xl overflow-hidden">
          <table className="w-full">
            {/* HEADER */}
            <thead className="bg-[#f4efe9] text-xs text-[#8c6b4f] uppercase tracking-wide">
              <tr>
                <th className="text-left px-8 py-5">SKU PRODUK</th>
                <th className="text-left px-8 py-5">TANGGAL BELI</th>
                <th className="text-left px-8 py-5">JUMLAH</th>
                <th className="text-left px-8 py-5">TANGGAL EXPIRED</th>
                <th className="text-left px-8 py-5">STATUS</th>
                <th></th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody>
              {data.map((item, i) => (
                <tr
                  key={i}
                  className={`border-t ${item.highlight ? "bg-[#f7f3ee]" : ""}`}
                >
                  <td className="px-8 py-6 font-semibold">{item.sku}</td>

                  <td className="px-8 py-6 font-medium">{item.buy}</td>

                  <td className="px-8 py-6">{item.qty}</td>

                  <td className="px-8 py-6">{item.exp}</td>

                  <td className="px-8 py-6">
                    <span
                      className={`px-5 py-2 rounded-full text-xs font-semibold ${item.color}`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="px-8 py-6 flex items-center justify-end gap-3">
                    <button className="border border-orange-500 text-orange-500 px-5 py-2 rounded-xl text-sm font-medium">
                      Perbarui
                    </button>

                    <div className="w-9 h-9 border border-gray-300 rounded-full flex items-center justify-center text-gray-400">
                      ⋮
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* FOOTER */}
          <div className="flex justify-between items-center px-8 py-4 text-sm text-gray-500 border-t">
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
    </div>
  );
}
