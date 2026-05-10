export function ContactSupport() {
  return (
    <section className="bg-black py-6">
      <div className="mx-auto border border-[#f3d9a9]/20 rounded-xl p-4 md:p-6 bg-linear-to-b from-[#111] to-black relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-[#f3d9a9] to-transparent opacity-50" />

        <div className="text-center mb-6">
          <h2 className="text-xl md:text-3xl font-bold pt-1 uppercase bg-linear-to-b from-[#f3d9a9] to-[#a67c37] bg-clip-text text-transparent mb-4">
            HOẶC LIÊN HỆ NGAY ĐỂ ĐƯỢC TƯ VẤN TRỰC TIẾP
          </h2>
          <p className="text-gray-400 text-xs md:text-base max-w-2xl mx-auto">
            Đội ngũ chuyên gia luôn sẵn sàng hỗ trợ bạn 24/7
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Phone */}
          <div className="bg-black/40 border border-white/5 rounded-xl p-4 md:p-6 flex items-center justify-center group">
            <div className="flex items-center gap-3 md:gap-4 w-full">
              <p className="text-3xl md:text-4xl text-[#f3d9a9] shrink-0">📞</p>
              <div className="text-left min-w-0">
                <h3 className="text-[#f3d9a9] text-base md:text-lg font-bold tracking-wider truncate">
                  0394 783 239
                </h3>
                <p className="text-gray-400 text-[10px] md:text-sm uppercase tracking-tight line-clamp-1">
                  (8:00 - 20:00, Thứ 2 - Thứ 7)
                </p>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="bg-black/40 border border-white/5 rounded-xl p-4 md:p-6 flex items-center justify-center group">
            <div className="flex items-center gap-3 md:gap-4 w-full">
              <p className="text-3xl md:text-4xl text-[#f3d9a9] shrink-0">✉️</p>
              <div className="text-left min-w-0">
                <h3 className="text-[#f3d9a9] text-base md:text-lg font-bold tracking-wider truncate">
                  lienhe.JC@gmail.com
                </h3>
                <p className="text-gray-400 text-[10px] md:text-sm uppercase tracking-tight line-clamp-1">
                  Phản hồi trong 24h
                </p>
              </div>
            </div>
          </div>

          {/* Chat */}
          <div className="bg-black/40 border border-white/5 rounded-xl p-4 md:p-6 flex items-center justify-center group">
            <div className="flex items-center gap-3 md:gap-4 w-full">
              <p className="text-3xl md:text-4xl text-[#f3d9a9] shrink-0">💬</p>
              <div className="text-left min-w-0">
                <h3 className="text-[#f3d9a9] text-base md:text-lg font-bold tracking-wider truncate">
                  Chat trực tuyến
                </h3>
                <p className="text-gray-400 text-[10px] md:text-sm uppercase tracking-tight line-clamp-1">
                  Trên website
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
