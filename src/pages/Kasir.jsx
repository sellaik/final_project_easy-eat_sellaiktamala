import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Kasir() {
  const [category, setCategory] = useState("All");

  const items = [
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
    <div className="bg-[#f6f3ef] min-h-screen">
      {/* ALERT */}
      <div className="bg-[#5b2e0f] text-white px-10 py-3 flex justify-between items-center text-sm">
        <p>
          ⚠ Peringatan Penting: Terdapat 4 bahan yang akan segera kadaluwarsa
          dan 2 bahan dengan stok rendah.
        </p>

        <button className="bg-orange-500 px-5 py-2 rounded-md">
          Cek Sekarang
        </button>
      </div>

      {/* CONTENT */}
      <div className="flex gap-6 p-6">
        {/* LEFT MENU */}
        <div className="flex-1">
          {/* CATEGORY */}
          <div className="flex gap-3 mb-6">
            {["All Items", "Food", "Drinks", "Snacks", "Desserts"].map(
              (cat, i) => (
                <button
                  key={i}
                  onClick={() => setCategory(cat)}
                  className={`px-5 py-2 rounded-xl text-sm ${
                    category === cat
                      ? "bg-orange-500 text-white"
                      : "bg-white border"
                  }`}
                >
                  {cat}
                </button>
              ),
            )}
          </div>

          {/* MENU GRID */}
          <div className="grid grid-cols-4 gap-5">
            {items.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm border p-4 cursor-pointer hover:shadow-md"
              >
                <div className="bg-gray-200 h-24 rounded-lg mb-3"></div>

                <p className="text-sm font-medium">{item.name}</p>

                <p className="text-orange-500 text-sm font-semibold">
                  {item.price}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT ORDER PANEL */}
        <div className="w-[300px] bg-white rounded-xl border p-5">
          <h2 className="font-semibold mb-2">Current Order</h2>

          <p className="text-sm text-gray-500 mb-4">Order #8824 • Table 05</p>

          <div className="border border-dashed rounded-lg p-6 text-center text-gray-400 mb-6">
            Scan or select more items
          </div>

          {/* TOTAL */}
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$30.50</span>
            </div>

            <div className="flex justify-between">
              <span>Tax (10%)</span>
              <span>$3.05</span>
            </div>

            <div className="border-t pt-3 flex justify-between font-semibold">
              <span>Total</span>
              <span>$33.55</span>
            </div>
          </div>

          {/* PAYMENT */}
          <div className="flex gap-3 mt-5">
            <button className="flex-1 border rounded-lg py-2">Cash</button>

            <button className="flex-1 border rounded-lg py-2">Card</button>
          </div>

          <button className="w-full mt-4 bg-orange-500 text-white py-3 rounded-lg">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
