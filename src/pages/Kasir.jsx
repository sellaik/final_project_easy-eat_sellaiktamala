import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Kasir() {
  const [category, setCategory] = useState("All");

  const products = [
    { name: "Cappucino Latte Hot", price: "RP. 22.000" },
    { name: "Coffee Butterscotch", price: "RP. 20.000" },
    { name: "Matcha Latte", price: "RP. 20.000" },
    { name: "Caramel Macchiato", price: "RP. 17.000" },
    { name: "Choco Ice Creamy Milk", price: "RP. 18.000" },
    { name: "KVRA Signature Coffee", price: "RP. 25.000" },
    { name: "Mojito Mint Soda", price: "RP. 22.000" },
    { name: "Long Black Ice", price: "RP. 17.000" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* ALERT */}
      <div className="bg-[#6B320B] text-white px-8 py-3 flex justify-between">
        <p>
          ⚠ Peringatan Penting: Terdapat 4 bahan yang akan segera kadaluwarsa
          dan 2 bahan dengan stok rendah.
        </p>

        <button className="bg-orange-500 px-4 py-1 rounded">
          Cek Sekarang
        </button>
      </div>

      {/* CONTENT */}
      <div className="flex gap-10 px-10 py-8 flex-1">
        {/* LEFT */}
        <div className="flex-1">
          {/* CATEGORY */}
          <div className="flex gap-4 mb-6">
            <button className="bg-orange-500 text-white px-6 py-2 rounded-xl">
              All Items
            </button>

            <button className="bg-white px-6 py-2 rounded-xl shadow">
              Food
            </button>

            <button className="bg-white px-6 py-2 rounded-xl shadow">
              Drinks
            </button>

            <button className="bg-white px-6 py-2 rounded-xl shadow">
              Snacks
            </button>

            <button className="bg-white px-6 py-2 rounded-xl shadow">
              Desserts
            </button>
          </div>

          {/* PRODUCTS */}
          <div className="grid grid-cols-4 gap-6">
            {products.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow p-4">
                <div className="bg-gray-200 h-28 rounded mb-3"></div>

                <p className="font-semibold text-gray-700 text-sm">
                  {item.name}
                </p>

                <p className="text-orange-500 font-bold text-sm mt-2">
                  {item.price}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="w-[350px] bg-white rounded-xl shadow p-6">
          <h2 className="font-bold text-lg mb-2">Current Order</h2>

          <p className="text-gray-400 text-sm mb-6">Order #8824 • Table 05</p>

          <div className="border-dashed border rounded-xl h-40 flex items-center justify-center text-gray-400 mb-6">
            Scan or select more items
          </div>

          <div className="flex justify-between mb-2">
            <p>Subtotal</p>
            <p>$30.50</p>
          </div>

          <div className="flex justify-between mb-4">
            <p>Tax (10%)</p>
            <p>$3.05</p>
          </div>

          <hr className="mb-4" />

          <div className="flex justify-between font-bold text-lg mb-6">
            <p>Total</p>
            <p>$33.55</p>
          </div>

          <div className="flex gap-3 mb-4">
            <button className="border flex-1 py-2 rounded">Cash</button>

            <button className="border flex-1 py-2 rounded">Card</button>
          </div>

          <button className="bg-orange-500 text-white w-full py-3 rounded-lg">
            Place Order
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <div className="border-t px-10 py-6 flex justify-between text-gray-500 text-sm">
        <p>© 2023 Easy Eat Inventory System. All rights reserved.</p>

        <div className="flex gap-6">
          <p>PUSAT BANTUAN</p>
          <p>PANDUAN KEAMANAN</p>
          <p>KONTAK SUPPORT</p>
        </div>
      </div>
    </div>
  );
}
