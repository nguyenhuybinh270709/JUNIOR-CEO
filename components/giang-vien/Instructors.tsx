import Image from "next/image";

export function Instructors() {
  const data = [
    {
      image: "/giang-vien/InstructorImg.png",
      name: "MÃ THANH DANH",
      role: "CEO SPHUB",
      exp: "15+ NĂM KINH NGHIỆM",
      desc: [
        "Doanh nhân, nhà đầu tư công nghệ",
        "Sáng lập SPHUB – hệ sinh thái hỗ trợ khởi nghiệp",
        "Cố vấn chiến lược cho nhiều startup triệu đô",
      ],
      quote:
        "Tôi tin rằng mỗi học sinh đều có thể trở thành nhà sáng lập của chính cuộc đời mình.",
    },
    {
      image: "/giang-vien/InstructorImg.png",
      name: "VÕ THỊ MỸ DUYÊN",
      role: "COO SPHUB",
      exp: "10+ NĂM KINH NGHIỆM",
      desc: [
        "Chuyên gia vận hành & phát triển hệ thống",
        "COO SPHUB – tăng trưởng doanh nghiệp đa kênh",
        "Cố vấn chiến lược cho nhiều thương hiệu lớn",
      ],
      quote:
        "Học kinh doanh bằng trải nghiệm, trưởng thành bằng trách nhiệm và kiên trì.",
    },
    {
      image: "/giang-vien/InstructorImg.png",
      name: "NGUYỄN ANH TOÀN",
      role: "CEO AEX ACADEMY",
      exp: "12+ NĂM KINH NGHIỆM",
      desc: [
        "Chuyên gia đào tạo & phát triển năng lực lãnh đạo",
        "Sáng lập AEX Academy",
        "Huấn luyện viên cho hàng ngàn học viên trẻ",
      ],
      quote: "Tư duy đúng – hành động đúng – kết quả sẽ thay đổi cuộc đời.",
    },
  ];

  return (
    <section className="py-8 mx-auto">
      {/* Header */}
      <div className="flex items-center justify-center gap-4 mb-4">
        <div className="hidden lg:block h-px w-50 bg-linear-to-r from-transparent to-[#f3d9a9]" />
        <h2 className="text-3xl md:text-4xl font-bold tracking-widest uppercase bg-linear-to-b from-[#f3d9a9] to-[#a67c37] bg-clip-text text-[#f3d9a9] lg:text-transparent pt-1">
          GIẢNG VIÊN CHỦ NHIỆM
        </h2>
        <div className="hidden lg:block h-px w-50 bg-linear-to-l from-transparent to-[#f3d9a9]" />
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-[#0a0a0a] border border-transparent bg-clip-padding relative before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-[linear-gradient(135deg,#A67C00,#F5D27A,#D4AF37)] before:content-[''] shadow-[0_0_5px_rgba(245,210,122,0.5)] rounded-xl p-4 flex flex-col"
          >
            {/* Top content */}
            <div className="flex gap-4 mb-4">
              {/* Left Column */}
              <div className="w-1/2 aspect-3/4 bg-[#1a1a1a] rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Column */}
              <div className="w-1/2 flex flex-col justify-center">
                <h3 className="text-lg font-bold text-white mb-1 leading-tight">
                  {item.name}
                </h3>
                <p className="text-xs text-[#c7a96b] mb-3 font-medium">
                  {item.role}
                </p>

                <div className="mb-4">
                  <span className=" text-[9px] lg:text-[12px] bg-linear-to-r from-[#8a6b3f] to-[#c7a96b] text-black px-2 py-1 rounded font-bold">
                    {item.exp}
                  </span>
                </div>

                <ul className="text-xs text-gray-300 space-y-2">
                  {item.desc.map((d, idx) => (
                    <li key={idx} className="flex gap-1">
                      <span className="text-[#c7a96b]">•</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom content */}
            <div className="mt-auto border px-4 py-3 border-transparent bg-clip-padding relative before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-[linear-gradient(135deg,#A67C00,#F5D27A,#D4AF37)] before:content-[''] shadow-[0_0_5px_rgba(245,210,122,0.5)] bg-black/20 rounded-xl">
              <p className="text-xs text-center text-gray-300">
                “{item.quote}”
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
