import { CircleChevronRight } from "lucide-react";

export function Roadmap() {
  const roadmapData = [
    {
      icon: "🧠",
      title: "THÁNG 1: TƯ DUY",
      description: "Xây nền tảng vững chắc",
      tasks: [
        "Tư duy doanh nhân",
        "Tài chính cá nhân & doanh nghiệp",
        "Ứng dụng AI cơ bản",
      ],
    },
    {
      icon: "⚙️",
      title: "THÁNG 2: ỨNG DỤNG",
      description: "Xây dựng & vận hành",
      tasks: ["Xây dựng sản phẩm", "Quản lý nhân sự", "Logistics & vận hành"],
    },
    {
      icon: "🏆",
      title: "THÁNG 3: THỰC CHIẾN",
      description: "Tăng tốc & bứt phá",
      tasks: ["Bán hàng", "Marketing", "Pitching gọi vốn"],
    },
  ];

  return (
    <section className="pt-6 sm:mt-5">
      <div className="mx-auto">
        <h2 className="text-[#edd9b4] lg:bg-linear-to-b from-white via-[#c7ae7f] to-[#927740] bg-clip-text lg:text-transparent text-center text-2xl sm:text-3xl font-semibold uppercase">
          Lộ trình 3 tháng: Học - Làm - Kiếm tiền
        </h2>

        <div className="py-6 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-0">
          {roadmapData.map((item, index) => (
            <div key={index} className="flex bg-[#0a0a0a]">
              <div className="bg-[linear-gradient(#0a0a0a,#0a0a0a) linear-gradient(135deg,#A67C00,#F5D27A,#D4AF37)] bg-clip-content border border-transparent relative rounded-2xl p-3 grid grid-cols-12 gap-1 shadow-[0_0_5px_rgba(245,210,122,0.5)] transition-all duration-200 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_5px_rgba(245,210,122,0.8)] hover:bg-[linear-gradient(#0a0a0a,#0a0a0a) linear-gradient(135deg,#FFD98F,#F0C36A,#D4A14E)]">
                <div className="col-span-4 text-yellow-400 flex items-center justify-center">
                  <div className="flex items-center justify-center w-25 h-25 bg-yellow-500/10 p-4 sm:p-3 lg:p-5 rounded-full">
                    <p className="text-5xl">{item.icon}</p>
                  </div>
                </div>

                <div className="col-span-8 pl-1 lg:pl-0 space-y-2">
                  <h3 className="text-[#d4b075] font-semibold text-xl">
                    {item.title}
                  </h3>

                  <p className="text-gray-300">{item.description}</p>

                  <div
                    className="text-white/90 space-y-12"
                    dangerouslySetInnerHTML={{ __html: item.tasks }}
                  />
                </div>
              </div>
              {index !== roadmapData.length - 1 && (
                <div className="hidden md:flex items-center justify-center">
                  <CircleChevronRight className="size-8 text-black fill-[#d4b075]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
