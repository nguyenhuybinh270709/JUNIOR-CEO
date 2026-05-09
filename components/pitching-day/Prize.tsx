import Image from "next/image";

const AWARDS = [
  {
    rank: "GIẢI NHẤT",
    value: "50.000.000 VNĐ",
    benefit: "+ Cơ hội đầu tư từ quỹ đối tác của Junior CEO",
    icon: "🏆",
  },
  {
    rank: "GIẢI NHÌ",
    value: "30.000.000 VNĐ",
    benefit: "+ Gói cố vấn 1:1 với doanh nhân thành công",
    icon: "🏅",
  },
  {
    rank: "GIẢI BA",
    value: "20.000.000 VNĐ",
    benefit: "+ Học bổng khóa học nâng cao",
    icon: "🥈",
  },
  {
    rank: "GIẢI KHUYẾN KHÍCH",
    value: "10.000.000 VNĐ",
    benefit: "+ Quà tặng từ các nhà tài trợ",
    icon: "⭐",
  },
];

export function Prize() {
  return (
    <section className="bg-black text-white font-sans">
      <div className="mx-auto border border-[#d4b075]/20 rounded-2xl overflow-hidden bg-linear-to-b from-white/5 to-transparent relative">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 px-6 py-6 flex flex-col items-center justify-center">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold bg-linear-to-b from-[#d4b075] via-[#e8d0a9] to-[#b38b4d] bg-clip-text text-transparent uppercase mb-3">
                Giải thưởng hấp dẫn
              </h2>
              <p className="text-[11px] md:text-[13px] text-gray-300">
                Tôn vinh những ý tưởng xuất sắc và tạo động lực để học viên bứt
                phá
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
              {AWARDS.map((item, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center text-center p-6 rounded-2xl border border-[#d4b075]/20 bg-black/40 transition-all duration-300 hover:border-[#d4b075]/60 hover:scale-104"
                >
                  <div className="text-4xl md:text-5xl mb-6 drop-shadow-[0_0_12px_rgba(212,176,117,0.4)] transition-transform group-hover:scale-110">
                    {item.icon}
                  </div>
                  <h3 className="text-[10px] md:text-[11px] font-bold text-[#f3d9a9] mb-2">
                    {item.rank}
                  </h3>
                  <p className="text-sm md:text-base font-bold text-white mb-2">
                    {item.value}
                  </p>
                  <p className="text-[10px] text-gray-400">{item.benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 z-10 " />
            <Image
              src="/pitching-day/Prize.png"
              alt="Celebration"
              fill
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
