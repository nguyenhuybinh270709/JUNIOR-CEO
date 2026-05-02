"use client";

import { ChuongTrinhData } from "@/services/chuong-trinh-service";
import { useRegisterDialogStore } from "@/store/useRegisterDialogStore";

type BottomBannerProps = Pick<ChuongTrinhData, "item_12">;

export function BottomBanner({ item_12 }: BottomBannerProps) {
  const openDialog = useRegisterDialogStore((state) => state.openDialog);

  return (
    <section className="w-full bg-black">
      <div className="mx-auto relative overflow-hidden rounded-2xl border border-transparent bg-clip-padding before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-[linear-gradient(135deg,#A67C00,#F5D27A,#D4AF37)] before:content-[''] shadow-[0_0_5px_rgba(245,210,122,0.5)] bg-linear-to-b from-[#0f0f0f] to-black">
        <div className="flex flex-col lg:flex-row items-stretch">
          {/* LEFT */}
          <div
            className="relative w-full lg:w-[65%] bg-none lg:bg-cover lg:bg-no-repeat py-6 lg:py-10"
            style={{
              backgroundImage: `url('${item_12.left_side.background_image}')`,
            }}
          >
            {/* overlay desktop */}
            <div className="hidden lg:block absolute inset-0 bg-linear-to-r from-transparent via-black/40 to-black/90"></div>

            {/* overlay mobile */}
            <div className="lg:hidden absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent"></div>

            <div className="relative z-10 w-full h-full px-6 sm:px-10 lg:px-12 lg:ml-50 flex flex-col justify-center">
              {/* TITLE */}
              <h2>
                <p className="text-xl sm:text-2xl font-semibold uppercase leading-tight tracking-wide bg-linear-to-b text-[#ecd388]">
                  {item_12.left_side.title_1}
                </p>
                <p className="text-xl sm:text-2xl font-semibold uppercase leading-tight tracking-wide bg-linear-to-b text-[#ecd388]">
                  {item_12.left_side.title_2}
                </p>
              </h2>

              {/* SUB */}
              <p className="mt-3 text-gray-300 text-xs sm:text-sm">
                {item_12.left_side.text}
              </p>

              {/* BUTTON */}
              <button
                className="mt-6 w-fit group flex items-center gap-2 px-6 py-3 rounded-lg font-semibold uppercase text-sm bg-linear-to-r from-[#e5cf90] via-[#c5a059] to-[#a17e3a] text-black transition-all duration-200 ease-in-out hover:scale-102 cursor-pointer"
                onClick={openDialog}
              >
                Đăng ký ngay
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-[#0a0a0a] relative z-10 w-full lg:w-[35%] px-4 py-6 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-[#c5a059]/30">
            <div className="grid grid-cols-3 justify-center text-center w-full">
              {item_12.right_side.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col justify-center px-4 ${index !== item_12.right_side.length - 1 ? "border-r border-[#3d3326]" : ""}`}
                >
                  <div className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#dfc474]">
                    {item.credential}
                  </div>
                  <p className="mt-2 text-[10px] sm:text-xs text-gray-400 uppercase leading-tight">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
