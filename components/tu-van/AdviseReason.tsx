export function AdviseReason() {
  const REASON = [
    {
      icon: "💡",
      title: "HIỂU RÕ NĂNG LỰC CỦA CON",
      description: "Đánh giá điểm mạnh, tiềm năng và định hướng phát triển",
    },
    {
      icon: "📜",
      title: "CHỌN ĐÚNG LỘ TRÌNH",
      description: "Tư vấn chương trình và kỹ năng phù hợp nhất",
    },
    {
      icon: "🛡️",
      title: "TIẾT KIỆM THỜI GIAN",
      description: "Nhận câu trả lời chính xác từ chuyên gia trong 30 phút",
    },
    {
      icon: "🤝",
      title: "ĐỒNG HÀNH DÀI LÂU",
      description: "Cam kết hỗ trợ học viên và gia đình trong suốt hành trình",
    },
  ];

  return (
    <section className="bg-black lg:pt-12 lg:pb-8">
      <div className="mx-auto">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-28 bg-linear-to-r from-transparent to-[#f3d9a9]" />
          <h2 className="bg-linear-to-b from-[#f3d9a9] to-[#a67c37] bg-clip-text text-[#f3d9a9] lg:text-transparent text-xl md:text-2xl lg:text-3xl font-bold text-center uppercase">
            VÌ SAO NÊN TƯ VẤN 1:1 CÙNG CHUYÊN GIA JUNIOR CEO?
          </h2>
          <div className="h-px w-28 bg-linear-to-l from-transparent to-[#f3d9a9]" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {REASON.map((item, index) => (
            <div
              key={index}
              className="bg-[#111] border border-white/10 rounded-xl p-4 flex flex-col items-center text-center transition-all duration-200 ease-in-out hover:scale-104 hover:border-[#d4a373]/50 group"
            >
              <div className="text-5xl mb-4">{item.icon}</div>

              <h3 className="bg-linear-to-b from-[#f3d9a9] to-[#a67c37] bg-clip-text text-[#f3d9a9] lg:text-transparent text-base font-bold flex items-center">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
