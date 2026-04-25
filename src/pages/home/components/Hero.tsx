import HeroImg from "@/assets/home/HeroImg.png";
import FourPeopleHeads from "@/assets/home/4PeopleHeads.png";
import HeroBadge from "@/assets/home/HeroBadge.png";
import {
  ArrowRight,
  BriefcaseBusiness,
  Clock,
  Coins,
  MessageCircleMore,
  Sparkle,
} from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section
      className="relative w-full bg-black text-white pt-12 pb-4 px-8 bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <div className="lg:flex mx-auto gap-12 items-center">
        <div className="w-full lg:w-[40%] space-y-4">
          {/* Top tag */}
          <div className="flex items-center justify-center lg:justify-normal gap-4 mb-1 lg:ml-2 transition-all duration-200 ease-in-out hover:scale-102">
            <div>
              <Sparkle className="size-3 text-[#fce094] fill-current drop-shadow-[0_0_5px_rgba(252,224,148,0.8)]" />
            </div>
            <div className="flex items-center w-fit py-2 px-3 bg-white/5 border border-white/30 rounded-full">
              <p className="text-xs bg-linear-to-r from-[#d4b075] to-[#e8d0a9] bg-clip-text text-transparent font-semibold tracking-wider">
                CHƯƠNG TRÌNH ĐÀO TẠO DOANH NHÂN TRẺ
              </p>
            </div>
          </div>

          {/* Main title */}
          <div className="flex flex-col justify-center gap-2">
            <h1 className="text-7xl text-center lg:text-left font-bold bg-linear-to-b from-[#d4b075] via-[#e8d0a9] to-[#b38b4d] bg-clip-text text-transparent transition-all duration-200 ease-in-out hover:scale-103">
              JUNIOR CEO
            </h1>
            <h2 className="text-4xl text-center lg:text-left font-bold text-white transition-all duration-200 ease-in-out hover:scale-102">
              KHỞI NGHIỆP CÙNG CON
            </h2>
            <p className="text-gray-300 text-md mt-2 transition-all duration-200 ease-in-out hover:scale-102">
              Chương trình giúp con học thật - làm thật - kiếm tiền thật thông
              qua dự án kinh doanh thực tế với doanh thu thật.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="flex items-center justify-center bg-[#1a1a1a] border border-[#3d3326] gap-3 p-2 rounded-xl transition-all duration-200 ease-in-out hover:scale-105">
              <div>
                <Clock className="text-[#e6c891]" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-sm font-semibold text-[#e6c891]">3 THÁNG</p>
                <p className="text-xs text-[#e6c891]/70">CHƯƠNG TRÌNH</p>
              </div>
            </div>
            <div className="flex items-center justify-center bg-[#1a1a1a] border border-[#3d3326] gap-3 p-2  rounded-xl transition-all duration-200 ease-in-out hover:scale-105">
              <div>
                <BriefcaseBusiness className="text-[#e6c891]" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-sm font-semibold text-[#e6c891]">1 DỰ ÁN</p>
                <p className="text-xs text-[#e6c891]/70">THỰC TẾ</p>
              </div>
            </div>
            <div className="flex items-center justify-center bg-[#1a1a1a] border border-[#3d3326] gap-3 p-2  rounded-xl transition-all duration-200 ease-in-out hover:scale-105">
              <div>
                <Coins className="text-[#e6c891]" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-sm font-semibold text-[#e6c891]">
                  KIẾM TIỀN
                </p>
                <p className="text-xs text-[#e6c891]/70">THẬT</p>
              </div>
            </div>
          </div>

          {/* Actions buttons */}
          <div className="grid grid-cols-2 gap-4 h-11">
            <Link to={"/dang-ky"}>
              <button className="flex justify-center w-full h-full font-semibold bg-linear-to-r from-[#d4b075] to-[#c59c5d] rounded-md text-black items-center gap-2 hover:opacity-90 whitespace-nowrap transition-all duration-200 ease-in-out hover:scale-102 cursor-pointer">
                <p>ĐĂNG KÝ NGAY</p>
                <ArrowRight className="size-4" />
              </button>
            </Link>
            <button className="border border-[#3d3326] rounded-md hover:bg-white/10 transition-all duration-200 ease-in-out hover:scale-102 cursor-pointer">
              <div className="flex items-center justify-center gap-3 font-semibold">
                <p>NHẬN TƯ VẤN 1:1</p>
                <MessageCircleMore className="size-4" />
              </div>
            </button>
          </div>

          {/* Target audience */}
          <div className="grid grid-cols-4 items-center transition-all duration-200 ease-in-out hover:scale-105">
            <div className="col-span-1">
              <img
                src={FourPeopleHeads}
                alt="FourPeopleHeads"
                className="w-full"
              />
            </div>
            <div className="col-span-3">
              <p className="text-md">Dành cho học sinh 10-17 tuổi</p>
            </div>
          </div>
        </div>

        {/* Badge */}
        <div className="mx-auto mt-6 lg:mt-0 lg:absolute lg:bottom-0 lg:right-6 w-80 lg:w-40 h-80 lg:h-40 transition-all duration-200 ease-in-out hover:scale-105">
          <img src={HeroBadge} alt="HeroBadge" className="w-full h-full" />
        </div>
      </div>
    </section>
  );
}
