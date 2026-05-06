import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full lg:h-90 bg-black/80 overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="hidden lg:block absolute inset-0 z-0">
        <Image
          src={"/faq/HeroImg.png"}
          alt="Hero Background Image"
          fill
          className="object-cover object-right"
          priority
        />
      </div>

      <div className="relative mx-auto mt-6 lg:mt-0 grid lg:grid-cols-2 gap-5 items-center pl-2 lg:pl-8 lg:pr-38 z-10">
        <div className="px-6 lg:px-0 lg:pl-6 pb-2 space-y-3 mt-4">
          <p className="text-xl font-semibold bg-linear-to-br from-white via-[#c7ae7f] to-[#c19e59] bg-clip-text text-transparent transition-all duration-200 ease-in-out hover:scale-102">
            CÂU HỎI THƯỜNG GẶP
          </p>

          <h1 className="text-5xl lg:text-7xl font-bold bg-linear-to-b from-white/90 via-[#c7ae7f]/90 to-[#c19e59]/90 bg-clip-text text-transparent transition-all duration-200 ease-in-out hover:scale-102">
            FAQ
          </h1>

          <p className="text-xl font-semibold bg-linear-to-br from-white via-[#c7ae7f] to-[#c19e59] bg-clip-text text-transparent transition-all duration-200 ease-in-out hover:scale-102">
            Giải đáp thác mắc - Đồng hành cùng phụ huynh
          </p>

          <p className="text-white/85 text-sm lg:text-base transition-all duration-200 ease-in-out hover:scale-102">
            Chúng tôi hiểu rằng việc lựa chọn một chương trình học phù hợp cho
            con là quyết định quan trọng. Dưới đây là những câu hỏi mà phụ huynh
            và học viên thường quan tâm nhất về Junior CEO.
          </p>
        </div>
      </div>
    </section>
  );
}
