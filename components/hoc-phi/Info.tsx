"use client";

import { useState } from "react";
import { ChevronDown, Sparkles, Share2, ShieldCheck } from "lucide-react";

export function Info() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Học phí đã bao gồm những gì?",
      a: "Học phí đã bao gồm toàn bộ chi phí học tập, tài liệu, workshop, dự án thực tế, tham quan doanh nghiệp và chứng nhận hoàn thành khóa học.",
    },
    {
      q: "Có hỗ trợ trả góp không?",
      a: "Có, chúng tôi hỗ trợ trả góp 0% qua thẻ tín dụng trong 3 tháng.",
    },
    {
      q: "Chính sách hoàn học phí như thế nào?",
      a: "Học phí không hoàn lại, nhưng có thể bảo lưu cho khóa sau trong vòng 12 tháng nếu có lý do chính đáng.",
    },
  ];

  const reasons = [
    {
      icon: <Sparkles className="text-[#f3d9a9]" />,
      title: "KẾT QUẢ THỰC TẾ",
      desc: "Con phát triển tư duy, kỹ năng và sự tự tin để thành công sớm.",
    },
    {
      icon: <Share2 className="text-[#f3d9a9]" />,
      title: "MẠNG LƯỚI TINH HOA",
      desc: "Kết nối với cộng đồng doanh nhân và bạn bè xuất sắc.",
    },
    {
      icon: <ShieldCheck className="text-[#f3d9a9]" />,
      title: "GIÁ TRỊ DÀI HẠN",
      desc: "Hành trang vững chắc giúp con dẫn đầu trong tương lai.",
    },
  ];

  return (
    <section className="bg-black pt-8">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: FAQ Side */}
        <div className="bg-[#0d0d0d] border border-zinc-800 rounded-2xl p-6 lg:p-8">
          <h2 className="bg-linear-to-r from-[#f3d9a9] to-[#a67c37] bg-clip-text text-[#f3d9a9] lg:text-transparent text-xl md:text-2xl font-bold text-center mb-8 tracking-widest uppercase">
            Câu hỏi thường gặp
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-zinc-800/50 pb-4">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex justify-between items-center text-left py-2 group cursor-pointer"
                >
                  <span className="text-[#f3d9a9] font-semibold text-sm md:text-base pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`text-[#f3d9a9] transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`}
                    size={20}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Why Choose Us Side */}
        <div className="bg-[#0d0d0d] border border-zinc-800 rounded-2xl p-6 lg:p-8">
          <h2 className="bg-linear-to-r from-[#f3d9a9] to-[#a67c37] bg-clip-text text-[#f3d9a9] lg:text-transparent text-xl md:text-2xl font-bold text-center mb-10 tracking-widest uppercase">
            Vì sao phụ huynh đầu tư cho Junior CEO?
          </h2>
          <div className="space-y-10">
            {reasons.map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start group">
                <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl border border-[#f3d9a9]/30 bg-[#1a1a1a] flex items-center justify-center shadow-[inset_0_0_10px_rgba(243,217,169,0.1)] transition-transform group-hover:scale-110">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-[#f3d9a9] font-bold tracking-wider mb-1 text-sm md:text-base">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
