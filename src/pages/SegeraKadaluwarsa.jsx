export default function SegeraKedaluwarsa() {
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
  ];

  return (
    <div className="bg-[#f6f3ef] min-h-screen flex flex-col">
      {/* ALERT */}
      <div className="bg-[#5b2e0f] text-white px-10 py-3 flex justify-between items-center text-sm">
        <p>
          ⚠ Peringatan Penting: Terdapat 5 bahan yang akan segera kadaluwarsa
          dan 2 bahan dengan stok rendah.
        </p>

        <button className="bg-orange-500 px-5 py-1 rounded-md">
          Cek Sekarang
        </button>
      </div>

      <div className="px-12 py-10 flex-1">
        {/* TITLE */}
        <div className="flex justify-between items-start mb-10">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Stok Segera Kedaluwarsa
            </h1>

            <p className="text-gray-500 mt-2">
              Kelola stok bahan yang mendekati tanggal kedaluwarsa untuk
              mengurangi limbah operasional.
            </p>
          </div>

          <div className="flex gap-4">
            <button className="border border-gray-300 bg-white px-5 py-2 rounded-lg text-sm">
              ⬇ Ekspor Laporan
            </button>

            <button className="bg-orange-500 text-white px-5 py-2 rounded-lg text-sm">
              + Tambah Stok
            </button>
          </div>
        </div>

        {/* STATUS CARDS */}
        <div className="grid grid-cols-4 gap-6 mb-10">
          <div className="bg-white border border-orange-300 rounded-xl p-6 flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-500 mb-1">STOK HABIS</p>
              <p className="text-3xl font-bold">1</p>
            </div>

            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-500">
              !
            </div>
          </div>

          <div className="bg-white border border-orange-300 rounded-xl p-6 flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-500 mb-1">STOK RENDAH</p>
              <p className="text-3xl font-bold">2</p>
            </div>

            <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
              ⚠
            </div>
          </div>

          <div className="bg-white border border-orange-300 rounded-xl p-6 flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-500 mb-1">STOK TERSEDIA</p>
              <p className="text-3xl font-bold">5</p>
            </div>

            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
              ✔
            </div>
          </div>

          {/* ACTIVE CARD */}
          <div className="bg-orange-500 text-white rounded-xl p-6 flex justify-between items-center">
            <div>
              <p className="text-xs opacity-80 mb-1">SEGERA KADALUWARSA</p>
              <p className="text-3xl font-bold">4</p>
            </div>

            <div className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center">
              ⏱
            </div>
          </div>
        </div>

        {/* TABLE */}
        <div className="bg-[#faf8f5] border border-[#e8e2da] rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-[#f4efe9] text-gray-500 text-xs">
              <tr>
                <th className="text-left px-6 py-4">NAMA BAHAN</th>
                <th className="text-left px-6 py-4">TANGGAL KADALUWARSA</th>
                <th className="text-left px-6 py-4">STOK</th>
                <th className="text-left px-6 py-4">STATUS</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {items.map((item, i) => (
                <tr key={i} className="hover:bg-[#f7f3ee]">
                  <td className="px-6 py-6 font-medium text-gray-800">
                    {item.name}
                  </td>

                  <td className="px-6 py-6">
                    <p>{item.date}</p>

                    <p className="text-red-500 text-xs">{item.note}</p>
                  </td>

                  <td className="px-6 py-6 font-medium">{item.stock}</td>

                  <td className="px-6 py-6">
                    <span
                      className={`px-4 py-1 rounded-full text-xs font-semibold ${item.color}`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="px-6 py-6">
                    <div className="flex items-center gap-4 justify-end">
                      <button className="border border-orange-500 text-orange-500 px-4 py-1 rounded-lg text-sm">
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

          {/* FOOTER TABLE */}

          <div className="flex justify-between items-center px-6 py-4 text-sm text-gray-500">
            <p>Menampilkan 1-7 dari 15 bahan</p>

            <div className="flex gap-2">
              <button className="border w-8 h-8 rounded">‹</button>

              <button className="bg-orange-500 text-white w-8 h-8 rounded">
                1
              </button>
              <button className="border w-8 h-8 rounded">›</button>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}

      <div className="border-t bg-white px-10 py-6 text-sm flex justify-between text-gray-500">
        <p>© 2023 Easy Eat Inventory System. All rights reserved.</p>

        <div className="flex gap-6">
          <span>PUSAT BANTUAN</span>

          <span>PANDUAN KEAMANAN</span>

          <span>KONTAK SUPPORT</span>
        </div>
      </div>
    </div>
  );
}
