"use client";

import { PhuHuynhNoiGiData } from "@/services/phu-huynh-noi-gi-service";
import { useRegisterDialogStore } from "@/store/useRegisterDialogStore";
import Image from "next/image";

type BottomBannerProps = Pick<PhuHuynhNoiGiData, "item_8">;

export function BottomBanner({ item_8 }: BottomBannerProps) {
  const openDialog = useRegisterDialogStore((state) => state.openDialog);

  return (
    <section className="w-full bg-black mt-12 lg:mt-0">
      <div className="mx-auto relative overflow-hidden rounded-2xl border border-white/20 lg:border-none bg-linear-to-b from-[#0f0f0f] to-black p-4 lg:p-0">
        <div className="h-fit lg:h-100 flex flex-col lg:flex-row items-stretch">
          <div className="relative w-full">
            <Image
              src={item_8.image}
              alt="Background Image"
              fill
              unoptimized
              className="hidden lg:block object-cover"
            />

            <div className="hidden lg:block absolute inset-0 bg-linear-to-r from-transparent via-black/10 to-black/70"></div>

            <div className="relative z-10 w-fit h-full px-6 sm:px-10 lg:px-12 lg:ml-[42%] flex flex-col justify-center py-10 lg:py-0">
              <h2 className="text-2xl md:text-3xl font-bold uppercase mb-4 bg-linear-to-b from-[#f3e2c3] via-[#c7a96b] to-[#8a6b3f] bg-clip-text text-transparent">
                {item_8.text_1}
              </h2>

              <p className="text-gray-200 text-sm md:text-base mb-8 max-w-md">
                {item_8.text_2}
              </p>

              <button
                className="w-fit mx-auto lg:mx-0 group flex items-center gap-2 px-6 py-3 rounded-lg font-semibold uppercase text-sm bg-linear-to-r from-[#e5cf90] via-[#c5a059] to-[#a17e3a] text-black transition-all duration-200 ease-in-out hover:scale-102 cursor-pointer"
                onClick={openDialog}
              >
                ĐĂNG KÝ TƯ VẤN NGAY
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
