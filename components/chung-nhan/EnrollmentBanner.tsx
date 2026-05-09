"use client";

import { ChungNhanData } from "@/services/chung-nhan-service";
import { useRegisterDialogStore } from "@/store/useRegisterDialogStore";
import { LucideMoveRight } from "lucide-react";

type EnrollmentBannerProps = Pick<ChungNhanData, "item_12">;

export function EnrollmentBanner({ item_12 }: EnrollmentBannerProps) {
  const openDialog = useRegisterDialogStore((state) => state.openDialog);

  return (
    <section className="w-full mx-auto py-4 border lg:border-none border-white/30 rounded-2xl bg-[#111] lg:bg-transparent lg:borer-none">
      <div className="relative overflow-hidden rounded-2xl lg:bg-[url('/chung-nhan/EnrollmentBanner.png')] bg-cover bg-no-repeat p-8 md:p-12">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:max-w-[70%]">
            <div className="lg:pl-90 text-center md:text-left space-y-4">
              <h2 className="text-2xl font-bold bg-linear-to-r from-[#efe2c8] via-[#c4aa79] to-[#e0b866] bg-clip-text text-transparent uppercase tracking-wide">
                {item_12.text_1}
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl">
                {item_12.text_2}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4 shrink-0">
            <button
              className="group relative flex items-center gap-3 px-8 py-4 bg-linear-to-r from-[#e5cf90] via-[#c5a059] to-[#a17e3a] text-black rounded-xl font-bold uppercase transition-transform hover:scale-105 active:scale-95 shadow-[0_4px_20px_rgba(245,158,11,0.4)] cursor-pointer"
              onClick={openDialog}
            >
              Đăng ký ngay
              <LucideMoveRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            <div className="flex items-center gap-2 bg-linear-to-r from-[#efe2c8] via-[#c4aa79] to-[#e0b866] bg-clip-text text-transparent text-xs font-semibold uppercase tracking-tighter">
              <span>{item_12.under_register_button_text}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
