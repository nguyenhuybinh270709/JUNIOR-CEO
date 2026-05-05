import { Sparkles, Users, Rocket, Trophy } from "lucide-react";

export function Method() {
  const data = [
    {
      icon: <Sparkles className="w-6 h-6 text-[#c7a96b]" />,
      title: "HỌC QUA TRẢI NGHIỆM",
      desc: "70% thời lượng là thực hành, dự án thực tế",
    },
    {
      icon: <Users className="w-6 h-6 text-[#c7a96b]" />,
      title: "MENTOR 1:1",
      desc: "Đồng hành sát sao cùng từng học viên",
    },
    {
      icon: <Rocket className="w-6 h-6 text-[#c7a96b]" />,
      title: "HỌC TỪ THẤT BẠI",
      desc: "Khuyến khích thử nghiệm, rút kinh nghiệm",
    },
    {
      icon: <Trophy className="w-6 h-6 text-[#c7a96b]" />,
      title: "TRUYỀN CẢM HỨNG",
      desc: "Khơi dậy đam mê, tư duy lãnh đạo & lòng biết ơn",
    },
  ];

  return (
    <section className="py-8 mx-auto">
      <div className="bg-[#0a0a0a] border border-transparent bg-clip-padding before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-[linear-gradient(135deg,#A67C00,#F5D27A,#D4AF37)] before:content-[''] shadow-[0_0_5px_rgba(245,210,122,0.5)] rounded-xl p-8 md:p-6 relative overflow-hidden">
        <h2 className="text-center text-xl md:text-2xl lg:text-4xl font-bold bg-linear-to-b from-[#f3e2c3] via-[#c7a96b] to-[#8a6b3f] bg-clip-text text-transparent mb-12 uppercase">
          PHƯƠNG PHÁP GIẢNG DẠY TẠI JUNIOR CEO
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          {data.map((item, i) => (
            <div
              key={i}
              className="relative group px-4 transition-all duration-200 ease-in-out hover:scale-103"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-1 lg:mb- p-4 rounded-xl border border-[#c7a96b]/40 bg-linear-to-b from-[#1a1a1a] to-black shadow-[0_0_15px_rgba(199,169,107,0.1)]">
                  {item.icon}
                </div>
                <h4 className="text-[17px] font-bold text-[#c7a96b]">
                  {item.title}
                </h4>
                <p className="text-base text-gray-400">{item.desc}</p>
              </div>

              {i < data.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-[90%] bg-linear-to-b from-transparent via-[#c7a96b]/20 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
