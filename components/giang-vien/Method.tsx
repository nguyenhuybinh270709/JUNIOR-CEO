import { GiangVienData } from "@/services/giang-vien-service";
import Image from "next/image";

type MethodProps = Pick<GiangVienData, "item_8">;

export function Method({ item_8 }: MethodProps) {
  return (
    <section className="py-8 mx-auto">
      <div className="bg-[#0a0a0a] border border-transparent bg-clip-padding before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-[linear-gradient(135deg,#A67C00,#F5D27A,#D4AF37)] before:content-[''] shadow-[0_0_5px_rgba(245,210,122,0.5)] rounded-xl p-8 md:p-6 relative overflow-hidden">
        <h2 className="text-center text-xl md:text-2xl lg:text-4xl font-bold bg-linear-to-b from-[#f3e2c3] via-[#c7a96b] to-[#8a6b3f] bg-clip-text text-transparent mb-12 uppercase">
          {item_8.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          {item_8.method.map((item, i) => (
            <div
              key={i}
              className="relative group px-4 transition-all duration-200 ease-in-out hover:scale-103"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 p-2 rounded-xl border border-[#c7a96b]/40 bg-linear-to-b from-[#1a1a1a] to-black shadow-[0_0_15px_rgba(199,169,107,0.1)]">
                  <div className="shrink-0 w-12 h-12 lg:size-18 flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={56}
                      height={56}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
                <h4 className="text-[17px] font-bold text-[#c7a96b]">
                  {item.title}
                </h4>
                <p className="text-base text-gray-400">{item.description}</p>
              </div>

              {i < item_8.method.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-[90%] bg-linear-to-b from-transparent via-[#c7a96b]/20 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
