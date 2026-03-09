export default function Navbar() {
  return (
    <div className="bg-white border-b h-16 flex items-center justify-between px-8">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2 font-bold text-lg">
          <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white">
            🍴
          </div>
          Easy Eat
        </div>

        <div className="flex gap-8 text-gray-600">
          <span className="text-orange-500 font-semibold border-b-2 border-orange-500">
            Kasir
          </span>
          <span>Laporan Penjualan</span>
          <span>Promosi</span>
          <span>Inventaris</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <input
          placeholder="Cari bahan..."
          className="border rounded-lg px-3 py-1 text-sm w-48"
        />

        <span>🔔</span>
        <span>⚙️</span>

        <img src="https://i.pravatar.cc/40" className="w-8 h-8 rounded-full" />
      </div>
    </div>
  );
}
