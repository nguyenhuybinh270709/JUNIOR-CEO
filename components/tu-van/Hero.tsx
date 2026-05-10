import Image from "next/image";

export function Hero() {
  const features = [
    {
      icon: "🛡️",
      title: "TƯ VẤN CÁ NHÂN HÓA",
      desc: "Phân tích năng lực và mục tiêu riêng của từng học viên",
    },
    {
      icon: "📈",
      title: "ĐỊNH HƯỚNG CHƯƠNG TRÌNH PHÙ HỢP",
      desc: "Lựa chọn lộ trình tối ưu cho sự phát triển vượt trội",
    },
    {
      icon: "📅",
      title: "GIẢI ĐÁP CHI TIẾT 100%",
      desc: "Mọi thắc mắc về chương trình, học phí và chính sách",
    },
  ];

  return (
    <section className="w-full bg-[#0a0a0a] flex items-stretch">
      <div className="w-full flex flex-col lg:flex-row items-stretch">
        <div className="w-full lg:w-[50%] px-6 lg:pl-12 py-10 lg:py-6 flex flex-col justify-center z-10">
          <p className="text-lg font-bold bg-linear-to-b from-white via-[#c7ae7f] to-[#c19e59] bg-clip-text text-transparent mb-1">
            NHẬN TƯ VẤN 1:1
          </p>

          <h1 className="text-3xl lg:text-[45px] font-bold py-1 bg-linear-to-r from-[#efe2c8] via-[#c4aa79] to-[#e0b866] bg-clip-text text-transparent uppercase">
            ĐỊNH HƯỚNG TƯƠNG LAI DÀNH RIÊNG CHO CON CỦA BẠN
          </h1>

          <p className="text-gray-300 mt-2 text-sm">
            Mỗi học viên đều là một cá nhân đặc biệt. Buổi tư vấn 1:1 cùng
            chuyên gia Junior CEO sẽ giúp bạn hiểu rõ chương trình, lộ trình phù
            hợp và cơ hội phát triển tốt nhất cho con.
          </p>

          <div className="flex flex-col gap-6 mt-6">
            {features.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="shrink-0 mt-1">
                  <p className="text-2xl text-[#e6d3a3]">{item.icon}</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#e6d3a3] uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full lg:w-[55%]">
          <Image
            src="/tu-van/HeroImg.png"
            alt="Hero Image"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
