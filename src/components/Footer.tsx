import LogoJuniorCEO from "@/assets/home/Logo Junior CEO.png";
import { Phone, Mail, Globe, MapPin, ArrowRight } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-black text-gray-300 mt-14 pt-8 border-t border-[#1a1a1a]">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
        {/* Brand Section */}
        <div className="lg:col-span-3 space-y-4">
          <div className="flex items-center gap-3">
            <img
              src={LogoJuniorCEO}
              alt="LogoJuniorCEO"
              className="w-full h-full"
            />
          </div>
          <div>
            <p className="text-sm leading-relaxed max-w-sm">
              Kiến tạo thế hệ doanh nhân trẻ bản lĩnh, sáng tạo và có tầm ảnh
              hưởng.
            </p>
            <div className="flex gap-4 pt-2">
              {[FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-8 h-8 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[#d4a76a] transition-colors"
                  >
                    <Icon size={16} className="text-white" />
                  </a>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Explore Section */}
        <div className="lg:col-span-2">
          <h3 className="text-[#d4a76a] font-bold mb-6">KHÁM PHÁ</h3>
          <ul className="space-y-4 text-sm">
            {["Trang chủ", "Chương trình", "Giảng viên", "Học phí", "FAQ"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-[#d4a76a] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Information Section */}
        <div className="lg:col-span-2">
          <h3 className="text-[#d4a76a] font-bold mb-6">THÔNG TIN</h3>
          <ul className="space-y-4 text-sm">
            {["Về chúng tôi", "Điều khoản sử dụng", "Chính sách bảo mật"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-[#d4a76a] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="lg:col-span-2 space-y-4 text-sm">
          <h3 className="text-[#d4a76a] font-bold mb-6">LIÊN HỆ</h3>
          <div className="flex items-center gap-3">
            <Phone size={16} /> 0815 66 55 58
          </div>
          <div className="flex items-center gap-3">
            <div className="w-5 flex justify-center">
              <Mail size={18} />
            </div>
            hello@juniorceo.edu.vn
          </div>
          <div className="flex items-center gap-3">
            <Globe size={16} /> juniorceo.edu.vn
          </div>
          <div className="flex items-start gap-3">
            <MapPin size={16} /> TP. Hồ Chí Minh, Việt Nam
          </div>
        </div>

        {/* Newsletter Box */}
        <div className="lg:col-span-3">
          <div className="bg-[#111] px-6 py-4 border border-[#222] rounded-lg max-w-lg">
            <h3 className="text-[#d4a76a] font-bold mb-2">NHẬN BẢN TIN</h3>
            <p className="text-xs mb-4 text-gray-400">
              Cập nhật kiến thức & cơ hội đặc biệt dành riêng cho phụ huynh
            </p>
            <div className="flex bg-[#0a0a0a] border border-[#333] p-1">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="bg-transparent flex-1 px-3 outline-none text-sm"
              />
              <button className="bg-[#d4a76a]/85 hover:bg-[#d4a76a] bg- p-2 text-[#0a0a0a] rounded-md cursor-pointer">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-600 mt-12 py-4 border-t border-[#1a1a1a]">
        © 2024 Junior CEO. All rights reserved.
      </div>
    </footer>
  );
}
