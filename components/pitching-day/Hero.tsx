import { Play } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const features = [
    {
      icon: "💡",
      title: "TRÌNH BÀY Ý TƯỞNG",
      subTitle: "BỨT PHÁ",
    },
    {
      icon: "👥",
      title: "NHẬN GÓP Ý TỪ",
      subTitle: "CHUYÊN GIA",
    },
    {
      icon: "🏆",
      title: "CƠ HỘI GỌI VỐN VÀ",
      subTitle: "HIỆN THỰC HÓA DỰ ÁN",
    },
  ];

  return (
    <section className="relative grid w-full grid-cols-1 overflow-hidden bg-black text-white lg:grid-cols-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,184,77,0.08),transparent_35%)]" />

      <div className="relative z-10 col-span-4 flex flex-col justify-center py-10 lg:py-0 lg:pt-6 px-4 lg:px-0 lg:pl-12">
        {/* Top tag */}
        <div className="mx-auto">
          <div className="flex items-center justify-center lg:justify-normal gap-4 mb-3 lg:ml-2 transition-all duration-200 ease-in-out hover:scale-102">
            <div className="flex items-center w-fit py-2 px-3 bg-white/5 border border-white/30 rounded-full">
              <p className="p-2 lg:p-0 sm:text-xl lg:text-[17.5px] bg-linear-to-r from-[#d4b075] to-[#e8d0a9] bg-clip-text text-transparent font-semibold tracking-wider">
                SỰ KIỆN ĐỈNH CAO
              </p>
            </div>
          </div>
        </div>
        {/* Main title */}
        <div className="flex flex-col justify-center gap-2 mx-auto">
          <h1 className="text-6xl sm:text-8xl lg:text-6xl text-center lg:text-left font-bold bg-linear-to-b from-[#d4b075] via-[#e8d0a9] to-[#b38b4d] bg-clip-text text-transparent transition-all duration-200 ease-in-out hover:scale-103">
            PITCHING DAY
          </h1>

          <div className="flex items-center justify-center gap-2 mb-4 transition-all duration-200 ease-in-out hover:scale-102">
            <div className="h-px w-6 lg:w-12 bg-linear-to-r from-transparent to-[#f3d9a9]" />
            <h2 className="bg-linear-to-b from-[#f3d9a9] to-[#a67c37] bg-clip-text text-[#f3d9a9] lg:text-transparent text-[13px] lg:text-[16px] font-bold tracking-widest text-center uppercase">
              NƠI Ý TƯỞNG TRỞ THÀNH GIÁ TRỊ
            </h2>
            <div className="h-px w-6 lg:w-12 bg-linear-to-l from-transparent to-[#f3d9a9]" />
          </div>
        </div>

        <p className="text-gray-300 text-sm sm:text-lg lg:text-sm transition-all duration-200 ease-in-out hover:scale-102">
          Pitching Day là sự kiện cuối khóa, nơi các học viên Junior CEO trình
          bày dự án kinh doanh của mình trước Hội đồng Giám khảo là các doanh
          nhân, nhà đầu tư và chuyên gia hàng đầu.
        </p>

        <div className="mt-6 grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-7">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center transition-all duration-200 ease-in-out hover:scale-103"
            >
              <div className="mb-3 text-[34px] drop-shadow-[0_0_14px_rgba(227,168,84,0.45)] sm:text-[38px]">
                {item.icon}
              </div>

              <h3 className="text-[10px] font-bold leading-[1.7] tracking-[0.08em] text-[#f3d9a9] sm:text-[11px]">
                {item.title}
                <br />
                {item.subTitle}
              </h3>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-6 lg:mt-4">
          <button className="px-4 py-2 flex justify-center w-full h-full font-semibold bg-linear-to-r from-[#d4b075] to-[#c59c5d] rounded-md text-black items-center gap-1 lg:gap-2 hover:opacity-90 whitespace-nowrap transition-all duration-200 ease-in-out hover:scale-102 cursor-pointer">
            <p className="text-sm sm:text-xl">TÌM HIỂU THÊM</p>
            <Play />
          </button>
        </div>
      </div>

      <div className="relative col-span-6">
        <div className="absolute inset-0 z-10 bg-linear-to-r from-black via-black/35 to-transparent lg:from-black lg:via-black/10 lg:to-transparent" />

        <Image
          src="/pitching-day/HeroImg.png"
          alt="Hero Background"
          fill
          priority
        />
      </div>
    </section>
  );
}
