"use client";

const modules = [
  {
    title: "Tư duy tài chính & kinh doanh",
    content: [
      "Hiểu dòng tiền, lợi nhuận, mô hình kinh doanh",
      "Lập kế hoạch tài chính cho dự án",
    ],
    result: ["Hiểu rõ tài chính", "Làm chủ dòng tiền"],
  },
  {
    title: "Nghiên cứu thị trường & ý tưởng",
    content: [
      "Phân tích thị trường, xác định vấn đề, tìm ý tưởng đột phá",
      "Khảo sát & phỏng vấn khách hàng",
    ],
    result: ["Có ý tưởng khả thi", "Đúng nhu cầu thị trường"],
  },
  {
    title: "Ứng dụng AI trong kinh doanh",
    content: [
      "Sử dụng AI để nghiên cứu, phân tích, xây dựng giải pháp",
      "Ứng dụng AI vào marketing & bán hàng",
    ],
    result: ["Ứng dụng AI thành thạo", "Tăng hiệu suất"],
  },
  {
    title: "Bán hàng & Marketing",
    content: [
      "Xây dựng chiến lược marketing, thương hiệu, kênh bán hàng",
      "Thực hành bán hàng & chốt đơn",
    ],
    result: ["Bán hàng hiệu quả", "Tạo doanh thu"],
  },
  {
    title: "Quản lý vận hành",
    content: [
      "Quản lý đội nhóm, công việc, tài chính, chuỗi cung ứng",
      "Sử dụng công cụ quản trị hiện đại",
    ],
    result: ["Vận hành trơn tru", "Tối ưu nguồn lực"],
  },
  {
    title: "Chiến lược phát triển",
    content: [
      "Phân tích đối thủ, định vị, mở rộng",
      "Xây dựng kế hoạch tăng trưởng",
    ],
    result: ["Chiến lược rõ ràng", "Tăng trưởng bền vững"],
  },
  {
    title: "Xây dựng dự án thực tế",
    content: [
      "Xây dựng sản phẩm/dịch vụ hoàn chỉnh",
      "Triển khai, đo lường và tối ưu doanh thu",
    ],
    result: ["Hoàn thiện dự án", "Sẵn sàng gọi vốn"],
  },
];

const highlights = [
  {
    title: "DỰ ÁN THỰC TẾ",
    desc: "Học viên tự chọn ý tưởng và triển khai dự án",
  },
  {
    title: "CỐ VẤN 1:1",
    desc: "Đồng hành cùng chuyên gia và doanh nhân",
  },
  {
    title: "GỌI VỐN TRƯỚC HỘI ĐỒNG",
    desc: "Cơ hội nhận vốn lên tới 10 TRIỆU ĐỒNG",
  },
  {
    title: "CHỨNG NHẬN QUỐC TẾ",
    desc: "Mini MBA Global Young Founder",
  },
];

export function CurriculumTable() {
  return (
    <div className="w-full">
      <div className="mx-auto grid lg:grid-cols-4 gap-5">
        {/* TABLE */}
        <div className="lg:col-span-3 border border-transparent bg-clip-padding relative before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-[linear-gradient(135deg,#A67C00,#F5D27A,#D4AF37)] before:content-[''] shadow-[0_0_5px_rgba(245,210,122,0.5)] rounded-xl overflow-hidden bg-[#0a0a0a]">
          {/* HEADER */}
          <div className="grid grid-cols-12 text-center text-sm lg:text-base font-semibold text-[#c7ae7f] border-b border-[#2a2a2a]">
            <div className="col-span-4 py-4 border-r border-[#2a2a2a]">
              CHI TIẾT NỘI DUNG HỌC
            </div>
            <div className="col-span-5 py-4 border-r border-[#2a2a2a]">
              NỘI DUNG CHÍNH
            </div>
            <div className="col-span-3 py-4">KẾT QUẢ</div>
          </div>

          {/* BODY */}
          {modules.map((item, index) => {
            const moduleNumber = String(index + 1).padStart(2, "0");

            return (
              <div
                key={index}
                className="grid grid-cols-12 border-b border-[#1c1f26] text-xs lg:text-sm hover:bg-[#2a2a2a]"
              >
                {/* LEFT */}
                <div className="col-span-4 p-3 lg:p-4 border-r border-[#1c1f26]">
                  <div className="flex flex-col lg:flex-row gap-0 lg:gap-4">
                    <div className="flex items-center text-[#c7ae7f]/90 text-xs mb-1">
                      <p>MODULE</p>
                      <p className="text-base lg:text-lg font-bold ml-1">
                        {moduleNumber}
                      </p>
                    </div>
                    <p className="text-[#f5e1bb]">{item.title}</p>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="col-span-5 p-3 lg:p-4 border-r border-[#1c1f26] text-gray-300 space-y-1">
                  {item.content.map((c, i) => (
                    <p key={i}>{c}</p>
                  ))}
                </div>

                {/* RESULT */}
                <div className=" col-span-3 p-3 lg:p-4 text-gray-300 space-y-1">
                  {item.result.map((r, i) => (
                    <p key={i}>{r}</p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT PANEL */}
        <div className="w-full border border-transparent bg-clip-padding relative before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-[linear-gradient(135deg,#A67C00,#F5D27A,#D4AF37)] before:content-[''] shadow-[0_0_5px_rgba(245,210,122,0.5)] rounded-xl py-3 px-4 bg-[#0a0a0a]">
          <h3 className="text-[#c7ae7f] text-xl lg:text-lg font-semibold mb-8 text-center">
            ĐIỂM NHẤN ĐỘC QUYỀN
          </h3>

          <div className="space-y-10">
            {highlights.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-[20%] size-12 lg:size-14 p-2 flex items-center justify-center rounded-full bg-[#11161c] border border-[#2a2a2a] text-[#c7ae7f]">
                  <p className="text-3xl lg:text-5xl">★</p>
                </div>
                <div>
                  <p className="text-[#f5e1bb] text-base font-medium">
                    {item.title}
                  </p>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
