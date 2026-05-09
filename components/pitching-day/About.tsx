export function About() {
  const pitchingItems = [
    {
      icon: "📅",
      title: "SỰ KIỆN CUỐI KHÓA",
      description: "Dấu mốc quan trọng khép lại hành trình học tập",
    },
    {
      icon: "📈",
      title: "TRÌNH BÀY DỰ ÁN",
      description: "Học viên pitch ý tưởng trước Hội đồng Giám khảo",
    },
    {
      icon: "⭐",
      title: "ĐÁNH GIÁ & NHẬN XÉT",
      description: "Góp ý chuyên sâu giúp hoàn thiện và phát triển dự án",
    },
    {
      icon: "🤝",
      title: "CƠ HỘI KẾT NỐI",
      description: "Gặp gỡ nhà đầu tư và mở rộng mạng lưới",
    },
    {
      icon: "🚀",
      title: "HIỆN THỰC HÓA",
      description:
        "Dự án tiềm năng có cơ hội được hỗ trợ để triển khai thực tế",
    },
  ];

  return (
    <section className="bg-black pt-8 lg:pt-12">
      <div className="mx-auto">
        {/* Header Section */}
        <div className="text-center mb-6">
          <h2 className="pt-1 bg-linear-to-b from-[#f3d9a9] via-[#d4a373] to-[#a67c37] bg-clip-text text-transparent text-3xl lg:text-4xl font-bold uppercase mb-3">
            VỀ PITCHING DAY
          </h2>
          <p className="lg:w-[60%] text-gray-300 text-sm lg:text-[15px] mx-auto">
            Được tổ chức vào cuối mỗi khóa học, Pitching Day là sân chơi thực tế
            giúp học viên ứng dụng kiến thức, kỹ năng đã học để xây dựng và
            trình bày dự án kinh doanh của riêng mình.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {pitchingItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-[#0a0a0a] border border-white/15 hover:border-white/35 rounded-xl px-4 py-4 flex flex-col items-center text-center transition-all duration-200 ease-in-out hover:scale-102"
            >
              <div className="text-4xl mb-4">{item.icon}</div>

              <h3 className="bg-linear-to-b from-[#f3d9a9] to-[#a67c37] bg-clip-text text-transparent text-sm md:text-base font-bold mb-2 uppercase">
                {item.title}
              </h3>

              <p className="text-gray-400 text-[13px]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
