import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import POS from "./pages/POS";
import Inventaris from "./pages/Inventaris";
import StokHabis from "./pages/StokHabis";
import StokRendah from "./pages/StokRendah";
import StokTersedia from "./pages/StokTersedia";
import SegeraKedaluwarsa from "./pages/SegeraKadaluwarsa";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div className="bg-[#f5f3f0] min-h-screen">
      <Navbar />

      <Routes>
        <Route path="/kasir" element={<POS />} />
        <Route path="/inventaris" element={<Inventaris />} />
        <Route path="/stok-habis" element={<StokHabis />} />
        <Route path="/stok-rendah" element={<StokRendah />} />
        <Route path="/stok-tersedia" element={<StokTersedia />} />
        <Route path="/kedaluwarsa" element={<SegeraKedaluwarsa />} />
        <Route path="/product/:name" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
