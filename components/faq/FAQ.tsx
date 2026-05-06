"use client";

import { useState } from "react";
import {
  BookOpen,
  Wallet,
  GraduationCap,
  Users,
  MoreHorizontal,
  Plus,
  Minus,
} from "lucide-react";

const CATEGORIES = [
  { id: "chuong_trinh_hoc", label: "CHƯƠNG TRÌNH HỌC", icon: BookOpen },
  { id: "hoc_phi_va_thanh_toan", label: "HỌC PHÍ & THANH TOÁN", icon: Wallet },
  {
    id: "hoc_vien_va_dau_vao",
    label: "HỌC VIÊN & ĐẦU VÀO",
    icon: GraduationCap,
  },
  { id: "phu_huynh_va_dong_hanh", label: "PHỤ HUYNH & ĐỒNG HÀNH", icon: Users },
  { id: "khac", label: "KHÁC", icon: MoreHorizontal },
];

const QUESTIONS = [
  {
    question: "Chương trình Junior CEO là gì?",
    answer:
      "Junior CEO là chương trình đào tạo dành cho học sinh 10-17 tuổi, giúp các em phát triển tư duy lãnh đạo, kỹ năng kinh doanh và bản lĩnh từ sớm. Chương trình kết hợp giữa lý thuyết, thực hành và dự án thực tế.",
  },
  {
    question: "Chương trình phù hợp với độ tuổi nào?",
    answer: "Thông tin đang được cập nhật.",
  },
  {
    question: "Học viên sẽ học những gì trong chương trình?",
    answer: "Thông tin đang được cập nhật.",
  },
  {
    question: "Chương trình kéo dài bao lâu?",
    answer: "Thông tin đang được cập nhật.",
  },
  {
    question: "Hình thức học diễn ra như thế nào?",
    answer: "Thông tin đang được cập nhật.",
  },
  {
    question: "Học viên có cần kiến thức kinh doanh trước không?",
    answer: "Thông tin đang được cập nhật.",
  },
  {
    question: "Học phí của chương trình là bao nhiêu?",
    answer: "Thông tin đang được cập nhật.",
  },
  {
    question: "Học phí đã bao gồm những gì?",
    answer: "Thông tin đang được cập nhật.",
  },
  {
    question: "Có chính sách hỗ trợ tài chính không?",
    answer: "Thông tin đang được cập nhật.",
  },
  {
    question: "Làm thế nào để đăng ký chương trình?",
    answer: "Thông tin đang được cập nhật.",
  },
  {
    question: "Phụ huynh có thể đồng hành cùng con như thế nào?",
    answer: "Thông tin đang được cập nhật.",
  },
  {
    question: "Junior CEO khác gì so với các khóa học khác?",
    answer: "Thông tin đang được cập nhật.",
  },
];

export function FAQComponent() {
  const [activeTab, setActiveTab] = useState("chuong_trinh_hoc");
  const [openId, setOpenId] = useState<number | null>(0);

  return (
    <section className="bg-black text-[#f3d9a9] pt-12 px-4 font-sans">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="hidden lg:block h-px w-30 bg-linear-to-r from-transparent to-[#f3d9a9]" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-widest uppercase bg-linear-to-b from-[#f3d9a9] to-[#a67c37] bg-clip-text text-[#f3d9a9] lg:text-transparent">
            DANH MỤC CÂU HỎI
          </h2>
          <div className="hidden lg:block h-px w-30 bg-linear-to-l from-transparent to-[#f3d9a9]" />
        </div>
        <p className="text-gray-300 text-sm md:text-base">
          Chọn chủ đề bạn quan tâm để tìm câu trả lời nhanh chóng
        </p>
      </div>

      <div className="mx-auto grid grid-cols-2 md:grid-cols-5 gap-3 mb-16 px-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`flex flex-col md:flex-row items-center justify-center gap-3 p-4 rounded-xl border transition-all duration-300 group cursor-pointer ${
              activeTab === cat.id
                ? "border-[#f3d9a9] bg-linear-to-b from-[#f3d9a9]/20 to-transparent shadow-[0_0_20px_rgba(243,217,169,0.15)]"
                : "border-white/10 bg-[#111] hover:border-[#f3d9a9]/50"
            }`}
          >
            <cat.icon
              className={`w-6 h-6 shrink-0 transition-colors ${activeTab === cat.id ? "text-[#f3d9a9]" : "text-white/40 group-hover:text-[#f3d9a9]/70"}`}
            />
            <span
              className={`text-[10px] md:text-xs font-bold leading-tight uppercase transition-colors ${activeTab === cat.id ? "text-[#f3d9a9]" : "text-white/40 group-hover:text-[#f3d9a9]/70"}`}
            >
              {cat.label}
            </span>
          </button>
        ))}
      </div>

      <div className="mx-auto mb-10 text-center">
        <div className="flex items-center justify-center gap-4">
          <div className="hidden lg:block h-px w-12 bg-linear-to-r from-transparent to-[#f3d9a9]" />
          <h3 className="text-xl md:text-2xl font-bold tracking-widest uppercase bg-linear-to-b from-[#f3d9a9] to-[#a67c37] bg-clip-text text-transparent">
            Câu Hỏi Thường Gặp
          </h3>
          <div className="hidden lg:block h-px w-12 bg-linear-to-l from-transparent to-[#f3d9a9]" />
        </div>
      </div>

      <div className="mx-auto grid md:grid-cols-2 gap-4 items-start">
        <div className="space-y-4">
          {QUESTIONS.slice(0, 6).map((item, index) => (
            <FAQItem
              key={index}
              index={index + 1}
              item={item}
              isOpen={openId === index}
              onToggle={() => setOpenId(openId === index ? null : index)}
            />
          ))}
        </div>
        <div className="space-y-4">
          {QUESTIONS.slice(6).map((item, index) => {
            const actualIndex = index + 6;
            return (
              <FAQItem
                key={actualIndex}
                index={actualIndex + 1}
                item={item}
                isOpen={openId === actualIndex}
                onToggle={() =>
                  setOpenId(openId === actualIndex ? null : actualIndex)
                }
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FAQItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: { question: string; answer: string };
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`rounded-xl border transition-all duration-400 overflow-hidden ${
        isOpen
          ? "border-[#f3d9a9]/50 bg-linear-to-br from-[#1a1a1a] to-black shadow-[inset_0_0_20px_rgba(243,217,169,0.05)]"
          : "border-white/5 bg-[#0a0a0a] hover:border-white/20"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 md:p-6 text-left gap-4 group cursor-pointer"
      >
        <span
          className={`text-sm md:text-base font-medium transition-colors duration-300 ${isOpen ? "text-[#f3d9a9]" : "text-gray-300 group-hover:text-white"}`}
        >
          {index}. {item.question}
        </span>
        <div
          className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? "border-[#f3d9a9] bg-[#f3d9a9]/10" : "border-white/10"}`}
        >
          {isOpen ? (
            <Minus className="w-4 h-4 text-[#f3d9a9]" />
          ) : (
            <Plus className="w-4 h-4 text-gray-500" />
          )}
        </div>
      </button>
      <div
        className={`transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 pt-0 text-gray-400 text-sm leading-relaxed border-t border-white/5">
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  );
}
