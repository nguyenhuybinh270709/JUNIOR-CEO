import Image from "next/image";

const MOMENTS = [
  {
    image: "/pitching-day/Prize.png",
  },
  {
    image: "/pitching-day/Prize.png",
  },
  {
    image: "/pitching-day/Prize.png",
  },
  {
    image: "/pitching-day/Prize.png",
  },
  {
    image: "/pitching-day/Prize.png",
  },
];

export function Moments() {
  return (
    <section className="bg-black text-white font-sans">
      <div className="mx-auto border border-[#d4b075]/20 rounded-2xl p-6 md:p-10 bg-linear-to-b from-white/5 to-transparent relative">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-12 bg-linear-to-r from-transparent to-[#d4b075]" />
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold bg-linear-to-b from-[#d4b075] via-[#e8d0a9] to-[#b38b4d] bg-clip-text text-transparent uppercase">
            Khoảnh khắc ấn tượng
          </h2>
          <div className="h-px w-12 bg-linear-to-l from-transparent to-[#d4b075]" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {MOMENTS.map((moment, index) => (
            <div
              key={index}
              className="group relative aspect-4/5 overflow-hidden rounded-xl border border-[#d4b075]/10 bg-neutral-900"
            >
              <Image
                src={moment.image}
                alt={"Image"}
                fill
                className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
