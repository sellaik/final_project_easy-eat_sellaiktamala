import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddStockModal from "../components/AddStockModal";

export default function Inventaris() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("ALL");
  const [openAddStock, setOpenAddStock] = useState(false);

  const items = [
    {
      name: "Daun Mint",
      date: "4 Mar 2026",
      note: "2 Kadaluwarsa Hari Ini",
      stock: "2 PACK",
      status: "AKAN KEDALUWARSA",
      color: "bg-red-100 text-red-500",
    },
    {
      name: "Susu UHT Full Cream",
      date: "4 Mar 2026",
      note: "1 Kadaluwarsa Hari Ini",
      stock: "3 DUS",
      status: "AKAN KEDALUWARSA",
      color: "bg-red-100 text-red-500",
    },
    {
      name: "Syrup Butterscotch",
      date: "24 Okt 2026",
      note: "",
      stock: "0 BOTOL",
      status: "STOK HABIS",
      color: "bg-red-200 text-red-600",
    },
    {
      name: "Evaporasi",
      date: "4 Mar 2026",
      note: "Kedaluwarsa Hari Ini",
      stock: "1 PCS",
      status: "STOK RENDAH",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      name: "Susu Kental Manis",
      date: "24 Sept 2026",
      note: "1 Kadaluwarsa Hari Ini",
      stock: "2 PCS",
      status: "STOK RENDAH",
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      name: "Syrup Vanilla",
      date: "24 Okt 2026",
      note: "",
      stock: "2 BOTOL",
      status: "STOK TERSEDIA",
      color: "bg-green-100 text-green-600",
    },
    {
      name: "Cup",
      date: "-",
      note: "",
      stock: "200 CUP",
      status: "STOK TERSEDIA",
      color: "bg-green-100 text-green-600",
    },
  ];

  const filteredItems =
    filter === "ALL" ? items : items.filter((item) => item.status === filter);

  return (
    <div className="bg-[#f6f3ef] min-h-screen flex flex-col">
      {/* ALERT */}
      <div className="bg-[#5b2e0f] text-white px-10 py-3 flex justify-between items-center text-sm">
        <p>
          ⚠ Peringatan Penting: Terdapat 5 bahan yang akan segera kadaluwarsa
          dan 2 bahan dengan stok rendah. Segera lakukan pengecekan.
        </p>

        <button className="bg-orange-500 px-5 py-1 rounded-md hover:bg-orange-600">
          Cek Sekarang
        </button>
      </div>

      {/* CENTER CONTENT */}
      <div className="flex justify-center flex-1">
        <div className="w-full max-w-[1280px] px-10 py-10">
          {/* TITLE */}
          <div className="flex justify-between items-start mb-10">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                Status Inventaris
              </h1>

              <p className="text-gray-500 mt-2">
                Kelola stok bahan yang mendekati tanggal kedaluwarsa untuk
                mengurangi limbah operasional.
              </p>
            </div>

            <div className="flex gap-4">
              <button className="border border-gray-300 bg-white px-5 py-2 rounded-lg text-sm hover:bg-gray-50">
                ⬇ Ekspor Laporan
              </button>

              <button
                onClick={() => setOpenAddStock(true)}
                className="flex items-center gap-2 bg-[#E26A0A] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[#d35f07] transition"
              >
                <span className="text-lg leading-none">+</span>
                Tambah Stok
              </button>
            </div>
          </div>

          {/* STATUS CARDS */}
          <div className="grid grid-cols-4 gap-6 mb-10">
            {/* STOK HABIS */}
            <div
              onClick={() => setFilter("STOK HABIS")}
              className={`rounded-xl p-6 flex justify-between items-center cursor-pointer border transition-all
              ${
                filter === "STOK HABIS"
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white border-orange-300 hover:shadow-md"
              }`}
            >
              <div>
                <p className="text-xs mb-1">STOK HABIS</p>
                <p className="text-3xl font-bold">1</p>
              </div>

              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                !
              </div>
            </div>

            {/* STOK RENDAH */}
            <div
              onClick={() => setFilter("STOK RENDAH")}
              className={`rounded-xl p-6 flex justify-between items-center cursor-pointer border transition-all
              ${
                filter === "STOK RENDAH"
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white border-orange-300 hover:shadow-md"
              }`}
            >
              <div>
                <p className="text-xs mb-1">STOK RENDAH</p>
                <p className="text-3xl font-bold">2</p>
              </div>

              <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                ⚠
              </div>
            </div>

            {/* STOK TERSEDIA */}
            <div
              onClick={() => setFilter("STOK TERSEDIA")}
              className={`rounded-xl p-6 flex justify-between items-center cursor-pointer border transition-all
              ${
                filter === "STOK TERSEDIA"
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white border-orange-300 hover:shadow-md"
              }`}
            >
              <div>
                <p className="text-xs mb-1">STOK TERSEDIA</p>
                <p className="text-3xl font-bold">5</p>
              </div>

              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                ✔
              </div>
            </div>

            {/* SEGERA KEDALUWARSA */}
            <div
              onClick={() => setFilter("AKAN KEDALUWARSA")}
              className={`rounded-xl p-6 flex justify-between items-center cursor-pointer border transition-all
              ${
                filter === "AKAN KEDALUWARSA"
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white border-orange-300 hover:shadow-md"
              }`}
            >
              <div>
                <p className="text-xs mb-1">SEGERA KEDALUWARSA</p>
                <p className="text-3xl font-bold">4</p>
              </div>

              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                ⏱
              </div>
            </div>
          </div>

          {/* TABLE */}
          <div className="bg-[#faf8f5] border border-[#e8e2da] rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              {/* HEADER */}
              <thead className="bg-[#f4efe9] text-gray-500 text-xs uppercase">
                <tr>
                  <th className="text-left px-6 py-4">Nama Bahan</th>
                  <th className="text-left px-6 py-4">Tanggal Kadaluarsa</th>
                  <th className="text-left px-6 py-4">Stok</th>
                  <th className="text-left px-6 py-4">Status</th>
                  <th></th>
                </tr>
              </thead>

              {/* BODY */}
              <tbody>
                {filteredItems.map((item, i) => (
                  <tr
                    key={i}
                    onClick={() => navigate(`/product/${item.name}`)}
                    className="cursor-pointer hover:bg-[#f7f3ee] border-t border-[#eee]"
                  >
                    <td className="px-6 py-6 font-medium text-gray-800">
                      {item.name}
                    </td>

                    <td className="px-6 py-6">
                      <p>{item.date}</p>

                      {item.note && (
                        <p className="text-red-500 text-xs">{item.note}</p>
                      )}
                    </td>

                    <td className="px-6 py-6 font-medium">{item.stock}</td>

                    <td className="px-6 py-6">
                      <span
                        className={`px-4 py-1 rounded-full text-xs font-semibold ${item.color}`}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td
                      className="px-6 py-6 text-right"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex justify-end items-center gap-3">
                        <button className="border border-orange-500 text-orange-500 px-4 py-1 rounded-lg text-sm hover:bg-orange-50">
                          Perbarui
                        </button>

                        <span className="text-gray-400 text-xl cursor-pointer">
                          ⋮
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* FOOTER */}
            <div className="flex justify-between items-center px-6 py-4 text-sm text-gray-500 border-t border-[#e8e2da]">
              <p>Menampilkan 1-7 dari 15 bahan</p>

              <div className="flex gap-2">
                <button className="border border-[#e8e2da] w-8 h-8 rounded">
                  ‹
                </button>

                <button className="bg-orange-500 text-white w-8 h-8 rounded">
                  1
                </button>

                <button className="border border-[#e8e2da] w-8 h-8 rounded">
                  2
                </button>

                <button className="border border-[#e8e2da] w-8 h-8 rounded">
                  3
                </button>

                <button className="border border-[#e8e2da] w-8 h-8 rounded">
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="border-t border-[#e8e2da] bg-[#faf8f5] px-10 py-6 text-sm flex justify-between text-gray-500">
        <p>© 2023 Easy Eat Inventory System. All rights reserved.</p>

        <div className="flex gap-6">
          <span>PUSAT BANTUAN</span>
          <span>PANDUAN KEAMANAN</span>
          <span>KONTAK SUPPORT</span>
        </div>
      </div>
      {openAddStock && (
        <div
          onClick={() => setOpenAddStock(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-[900px] rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* HEADER */}
            <div className="bg-orange-500 text-white px-10 py-6 flex justify-between items-start">
              <div className="flex gap-4 items-start">
                <div className="bg-white/20 p-3 rounded-lg text-xl">➕</div>

                <div>
                  <h2 className="text-[22px] font-semibold">Tambah Stok</h2>

                  <p className="text-sm opacity-90">
                    Tambahkan item ke inventaris gudang atau outlet.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setOpenAddStock(false)}
                className="text-white text-xl hover:opacity-70"
              >
                ✕
              </button>
            </div>

            {/* FORM */}
            <div className="px-10 py-8 space-y-6">
              {/* NAMA BAHAN */}
              <div>
                <label className="text-sm font-semibold">
                  Nama Bahan <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  placeholder="Contoh: Biji Kopi Robusta"
                  className="w-full border border-[#e8e2da] rounded-lg h-[46px] px-4 mt-2"
                />
              </div>

              {/* KATEGORI */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-semibold">Kategori</label>

                  <select className="w-full border border-[#e8e2da] rounded-lg h-[46px] px-4 mt-2">
                    <option>Bahan Minuman</option>
                    <option>Bahan Makanan</option>
                    <option>Peralatan</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-semibold">
                    Lokasi Penyimpanan
                  </label>

                  <select className="w-full border border-[#e8e2da] rounded-lg h-[46px] px-4 mt-2">
                    <option>Gudang Utama</option>
                    <option>Gudang Outlet</option>
                  </select>
                </div>
              </div>

              {/* STOCK */}
              <div className="grid grid-cols-4 gap-6">
                <div>
                  <label className="text-sm font-semibold">
                    In Stock <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="number"
                    placeholder="0"
                    className="w-full border border-[#e8e2da] rounded-lg h-[44px] px-4 mt-2"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold">SKU</label>

                  <input
                    type="text"
                    placeholder="AAAA"
                    className="w-full border border-[#e8e2da] rounded-lg h-[44px] px-4 mt-2"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold">
                    Alert At <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="number"
                    placeholder="0"
                    className="w-full border border-[#e8e2da] rounded-lg h-[44px] px-4 mt-2"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold">
                    Harga Beli Total (Rp)
                  </label>

                  <input
                    type="text"
                    placeholder="Rp 0"
                    className="w-full border border-[#e8e2da] rounded-lg h-[44px] px-4 mt-2"
                  />
                </div>
              </div>

              {/* TANGGAL */}
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <label className="text-sm font-semibold">Tanggal Beli</label>

                  <input
                    type="date"
                    className="w-full border border-[#e8e2da] rounded-lg h-[44px] px-4 mt-2"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold">
                    Tanggal Kadaluarsa
                  </label>

                  <input
                    type="date"
                    className="w-full border border-[#e8e2da] rounded-lg h-[44px] px-4 mt-2"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold">Supplier</label>

                  <input
                    type="text"
                    placeholder="PT. Jaya ..."
                    className="w-full border border-[#e8e2da] rounded-lg h-[44px] px-4 mt-2"
                  />
                </div>
              </div>

              {/* BUTTON */}
              <div className="flex justify-end gap-4 pt-6 border-t border-[#eee]">
                <button
                  onClick={() => setOpenAddStock(false)}
                  className="border border-orange-500 text-orange-500 px-6 py-2 rounded-lg hover:bg-orange-50"
                >
                  Batal
                </button>

                <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
                  Simpan Stok
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
