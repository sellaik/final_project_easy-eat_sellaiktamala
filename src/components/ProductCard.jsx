import Navbar from "../components/Navbar";
import AlertBar from "../components/AlertBar";
import CategoryTabs from "../components/CategoryTabs";
import ProductCard from "../components/ProductCard";
import OrderPanel from "../components/OrderPanel";
import Footer from "../components/Footer";

export default function POS() {
  const products = [
    {
      img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
      title: "Cappucino Latte Hot",
      price: "RP. 22.000",
    },
    {
      img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
      title: "Coffee Butterscotch",
      price: "RP. 20.000",
    },
    {
      img: "https://images.unsplash.com/photo-1527169402691-a7b3f1b6c2f0",
      title: "Matcha Latte",
      price: "RP. 20.000",
    },
    {
      img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
      title: "Caramel Macchiato",
      price: "RP. 17.000",
    },
    {
      img: "https://images.unsplash.com/photo-1527169402691-a7b3f1b6c2f0",
      title: "Choco Ice Creamy Milk",
      price: "RP. 18.000",
    },
    {
      img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
      title: "KVRA Signature Coffee",
      price: "RP. 25.000",
    },
    {
      img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
      title: "Mojito Mint Soda",
      price: "RP. 22.000",
    },
    {
      img: "https://images.unsplash.com/photo-1527169402691-a7b3f1b6c2f0",
      title: "Long Black Ice",
      price: "RP. 17.000",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <AlertBar />

      {/* MAIN CONTENT */}
      <div className="flex gap-8 px-12 py-8 flex-1">
        {/* LEFT SIDE */}
        <div className="flex-1">
          <CategoryTabs />

          {/* PRODUCT GRID */}
          <div className="grid grid-cols-4 gap-6 mt-6">
            {products.map((p, i) => (
              <ProductCard key={i} {...p} />
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-[380px]">
          <OrderPanel />
        </div>
      </div>

      <Footer />
    </div>
  );
}
