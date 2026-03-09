export default function CategoryTabs() {
  return (
    <div className="flex gap-4">
      <button className="bg-orange-500 text-white px-6 py-3 rounded-xl shadow">
        All Items
      </button>

      <button className="bg-white px-6 py-3 rounded-xl shadow text-gray-600">
        Food
      </button>

      <button className="bg-white px-6 py-3 rounded-xl shadow text-gray-600">
        Drinks
      </button>

      <button className="bg-white px-6 py-3 rounded-xl shadow text-gray-600">
        Snacks
      </button>

      <button className="bg-white px-6 py-3 rounded-xl shadow text-gray-600">
        Desserts
      </button>
    </div>
  );
}
