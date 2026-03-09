import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? "text-orange-500 font-semibold border-b-2 border-orange-500 pb-1"
      : "text-gray-600 hover:text-orange-500";

  return (
    <div className="bg-white border-b h-16 flex items-center justify-between px-10">
      {/* LEFT */}
      <div className="flex items-center gap-10">
        {/* LOGO */}
        <div className="flex items-center gap-2 font-semibold text-lg">
          <div className="bg-orange-500 text-white w-8 h-8 flex items-center justify-center rounded">
            🍴
          </div>
          Easy Eat
        </div>

        {/* MENU */}
        <div className="flex gap-6 text-sm">
          <Link to="/" className={isActive("/")}>
            Kasir
          </Link>

          <span className="text-gray-600 hover:text-orange-500 cursor-pointer">
            Laporan Penjualan
          </span>

          <span className="text-gray-600 hover:text-orange-500 cursor-pointer">
            Promosi
          </span>

          <Link to="/inventaris" className={isActive("/inventaris")}>
            Inventaris
          </Link>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        {/* SEARCH */}
        <div className="relative">
          <input
            placeholder="Cari bahan..."
            className="border rounded-lg pl-8 pr-4 py-2 text-sm w-56"
          />
          <span className="absolute left-2 top-2 text-gray-400">🔍</span>
        </div>

        {/* ICONS */}
        <div className="flex items-center gap-3 text-xl text-gray-600">
          <span className="cursor-pointer">🔔</span>

          <span className="cursor-pointer">⚙</span>
        </div>

        {/* PROFILE */}
        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
          👤
        </div>
      </div>
    </div>
  );
}
