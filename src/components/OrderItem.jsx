export default function OrderItem({ img, name, price }) {
  return (
    <div className="flex gap-3 mb-4 items-center">
      <img src={img} className="w-14 h-14 rounded-lg object-cover" />

      <div className="flex-1">
        <h4 className="text-sm font-semibold">{name}</h4>

        <p className="text-xs text-gray-400">Regular Milk</p>

        <div className="flex items-center gap-2 mt-1">
          <button className="border px-2 rounded">-</button>

          <span>1</span>

          <button className="bg-orange-500 text-white px-2 rounded">+</button>
        </div>
      </div>

      <p className="font-semibold">{price}</p>
    </div>
  );
}
