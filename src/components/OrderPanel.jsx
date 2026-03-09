export default function OrderPanel() {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="font-bold text-lg">Current Order</h2>

      <p className="text-gray-400 text-sm mb-6">Order #8824 • Table 05</p>

      <div className="border-2 border-dashed rounded-xl h-40 flex items-center justify-center text-gray-400 mb-6">
        Scan or select more items
      </div>

      <div className="flex justify-between text-sm mb-2">
        <p>Subtotal</p>
        <p>$30.50</p>
      </div>

      <div className="flex justify-between text-sm mb-4">
        <p>Tax (10%)</p>
        <p>$3.05</p>
      </div>

      <hr className="mb-4" />

      <div className="flex justify-between font-bold text-lg mb-6">
        <p>Total</p>
        <p>$33.55</p>
      </div>

      <div className="flex gap-3 mb-4">
        <button className="border flex-1 py-3 rounded-lg">Cash</button>

        <button className="border flex-1 py-3 rounded-lg">Card</button>
      </div>

      <button className="bg-orange-500 text-white w-full py-4 rounded-xl shadow-lg">
        Place Order
      </button>
    </div>
  );
}
