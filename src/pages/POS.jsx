import { useState } from "react";

function App() {
  const products = [
    {
      name: "Cappucino Latte Hot",
      price: "RP. 22.000",
      img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    },
    {
      name: "Coffee Butterscotch",
      price: "RP. 20.000",
      img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    },
    {
      name: "Matcha Latte",
      price: "RP. 20.000",
      img: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7",
    },
    {
      name: "Caramel Macchiato",
      price: "RP. 17.000",
      img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735",
    },
    {
      name: "Choco Ice Creamy Milk",
      price: "RP. 18.000",
      img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    },
    {
      name: "KVRA Signature Coffee",
      price: "RP. 25.000",
      img: "https://images.unsplash.com/photo-1498804103079-a6351b050096",
    },
    {
      name: "Mojito Mint Soda",
      price: "RP. 22.000",
      img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87",
    },
    {
      name: "Long Black Ice",
      price: "RP. 17.000",
      img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    },
  ];

  const [order] = useState([
    {
      name: "Double Cheese Burger",
      price: 25,
      qty: 2,
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    },
    {
      name: "Caramel Macchiato",
      price: 5.5,
      qty: 1,
      img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    },
  ]);

  return (
    <div className="bg-[#f6f3ef] min-h-screen flex flex-col">
      {/* ALERT */}
      <div className="bg-[#6B320B] text-white py-3">
        <div className="max-w-[1400px] mx-auto px-4 flex items-center justify-between">
          {/* LEFT */}
          <div className="flex items-center gap-3">
            <span className="text-xl">⚠</span>

            <p className="text-sm">
              Peringatan Penting: Terdapat 4 bahan yang akan segera kadaluwarsa
              dan 2 bahan dengan stok rendah. Segera lakukan pengecekan.
            </p>
          </div>

          {/* RIGHT */}
          <button className="bg-orange-500 px-5 py-2 rounded-lg hover:bg-orange-600">
            Cek Sekarang
          </button>
        </div>
      </div>

      {/* MAIN */}
      <div className="flex-1 py-10">
        <div className="max-w-[1400px] mx-auto flex gap-12 px-4">
          {/* LEFT MENU */}
          <div className="flex-1 max-w-[950px]">
            {/* CATEGORY */}
            <div className="flex gap-4 mb-8">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-xl shadow">
                All Items
              </button>

              <button className="bg-white px-6 py-3 rounded-xl shadow">
                Food
              </button>

              <button className="bg-white px-6 py-3 rounded-xl shadow">
                Drinks
              </button>

              <button className="bg-white px-6 py-3 rounded-xl shadow">
                Snacks
              </button>

              <button className="bg-white px-6 py-3 rounded-xl shadow">
                Desserts
              </button>
            </div>
          </div>

          {/* PRODUCTS */}
          <div className="grid grid-cols-4 gap-6">
            {products.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow hover:shadow-lg cursor-pointer overflow-hidden"
              >
                <img src={item.img} className="h-40 w-full object-cover" />

                <div className="p-5">
                  <p className="font-semibold text-gray-700 text-sm">
                    {item.name}
                  </p>

                  <p className="text-orange-500 font-bold mt-2">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="w-[420px] bg-white rounded-xl shadow p-6 flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-bold text-lg">Current Order</h2>
            <span className="text-orange-500 cursor-pointer">🗑</span>
          </div>

          <p className="text-gray-400 text-sm mb-6">Order #8824 • Table 05</p>

          {/* ORDER ITEMS */}
          <div className="space-y-5 mb-6">
            {order.map((item, index) => (
              <div key={index} className="flex gap-3">
                <img
                  src={item.img}
                  className="w-16 h-16 rounded-lg object-cover"
                />

                <div className="flex-1">
                  <div className="flex justify-between">
                    <p className="font-semibold text-sm">{item.name}</p>

                    <p className="font-bold">${item.price}</p>
                  </div>

                  <div className="flex items-center gap-3 mt-2">
                    <button className="w-7 h-7 border rounded">-</button>

                    <span>{item.qty}</span>

                    <button className="w-7 h-7 bg-orange-500 text-white rounded">
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* EMPTY */}
          <div className="border-dashed border rounded-xl h-32 flex items-center justify-center text-gray-400 mb-6">
            Scan or select more items
          </div>

          {/* TOTAL */}
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

          {/* PAYMENT */}
          <div className="flex gap-3 mb-4">
            <button className="border flex-1 py-3 rounded-lg">💵 Cash</button>

            <button className="border flex-1 py-3 rounded-lg">💳 Card</button>
          </div>

          <button className="bg-orange-500 text-white w-full py-4 rounded-xl font-semibold text-lg shadow-md hover:bg-orange-600">
            ✔ Place Order
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

export default App;
