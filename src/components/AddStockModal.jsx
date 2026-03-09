export default function AddStockModal({ closeModal }) {
  return (
    <div
      onClick={closeModal}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50"
    >
      {/* MODAL */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-[900px] rounded-2xl overflow-hidden shadow-2xl"
      >
        {/* HEADER */}
        <div className="bg-orange-500 text-white px-10 py-6 flex justify-between items-start">
          <div className="flex gap-4 items-start">
            <div className="bg-white/20 p-3 rounded-lg text-xl">➕</div>

            <div>
              <h2 className="text-[22px] font-semibold">Tambah Stok</h2>
              <p className="text-sm opacity-90">
                Tambahkan item ke inventaris gudang atau outlet.
              </p>
            </div>
          </div>

          <button
            onClick={closeModal}
            className="text-white text-xl hover:opacity-70"
          >
            ✕
          </button>
        </div>

        {/* FORM */}
        <div className="px-10 py-8 space-y-6">
          {/* NAMA BAHAN */}
          <div>
            <label className="text-sm font-semibold">
              Nama Bahan <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              placeholder="Contoh: Biji Kopi Robusta"
              className="w-full border border-[#e8e2da] rounded-lg h-[46px] px-4 mt-2"
            />
          </div>

          {/* KATEGORI + LOKASI */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-semibold">Kategori</label>

              <select className="w-full border border-[#e8e2da] rounded-lg h-[46px] px-4 mt-2">
                <option>Bahan Minuman</option>
                <option>Bahan Makanan</option>
                <option>Peralatan</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-semibold">
                Lokasi Penyimpanan
              </label>

              <select className="w-full border border-[#e8e2da] rounded-lg h-[46px] px-4 mt-2">
                <option>Gudang Utama</option>
                <option>Gudang Outlet</option>
              </select>
            </div>
          </div>

          {/* STOCK */}
          <div className="grid grid-cols-4 gap-6">
            <div>
              <label className="text-sm font-semibold">
                In Stock <span className="text-red-500">*</span>
              </label>

              <input
                type="number"
                placeholder="0"
                className="w-full border border-[#e8e2da] rounded-lg h-[44px] px-4 mt-2"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">SKU</label>

              <input
                type="text"
                placeholder="AAAA"
                className="w-full border border-[#e8e2da] rounded-lg h-[44px] px-4 mt-2"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">
                Alert At <span className="text-red-500">*</span>
              </label>

              <input
                type="number"
                placeholder="0"
                className="w-full border border-[#e8e2da] rounded-lg h-[44px] px-4 mt-2"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">
                Harga Beli Total (Rp)
              </label>

              <input
                type="text"
                placeholder="Rp 0"
                className="w-full border border-[#e8e2da] rounded-lg h-[44px] px-4 mt-2"
              />
            </div>
          </div>

          {/* TANGGAL */}
          <div className="grid grid-cols-3 gap-6">
            <div>
              <label className="text-sm font-semibold">Tanggal Beli</label>

              <input
                type="date"
                className="w-full border border-[#e8e2da] rounded-lg h-[44px] px-4 mt-2"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">
                Tanggal Kadaluarsa
              </label>

              <input
                type="date"
                className="w-full border border-[#e8e2da] rounded-lg h-[44px] px-4 mt-2"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">Supplier</label>

              <input
                type="text"
                placeholder="PT. Jaya ..."
                className="w-full border border-[#e8e2da] rounded-lg h-[44px] px-4 mt-2"
              />
            </div>
          </div>

          {/* BUTTON */}
          <div className="flex justify-end gap-4 pt-6 border-t border-[#eee]">
            <button
              onClick={closeModal}
              className="border border-orange-500 text-orange-500 px-6 py-2 rounded-lg hover:bg-orange-50"
            >
              Batal
            </button>

            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">
              Simpan Stok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
