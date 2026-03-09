import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-white border-b px-10 py-3 flex items-center justify-between">
      {/* LOGO */}
      <div className="flex items-center gap-3">
        <div className="bg-orange-500 text-white w-8 h-8 flex items-center justify-center rounded">
          🍴
        </div>
        <p className="font-semibold text-gray-800">Easy Eat</p>
      </div>

      {/* MENU */}
      <ul className="flex items-center gap-8 list-none text-gray-600 font-medium">
        <li>
          <Link to="/kasir" className="hover:text-orange-500">
            Kasir
          </Link>
        </li>

        <li>
          <Link to="/laporan" className="hover:text-orange-500">
            Laporan Penjualan
          </Link>
        </li>

        <li>
          <Link to="/promosi" className="hover:text-orange-500">
            Promosi
          </Link>
        </li>

        <li>
          <Link to="/inventaris" className="hover:text-orange-500">
            Inventaris
          </Link>
        </li>
      </ul>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Cari bahan..."
          className="border rounded-lg px-3 py-1 text-sm"
        />

        <span>🔔</span>
        <span>⚙</span>

        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
}
