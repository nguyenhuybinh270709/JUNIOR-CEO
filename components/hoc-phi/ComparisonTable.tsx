import {
  Check,
  X,
  BookOpen,
  Briefcase,
  Presentation,
  Users,
  UserCheck,
  Building2,
  Award,
  Network,
  Star,
  Globe,
} from "lucide-react";

export function ComparisonTable() {
  const plans = ["STANDARD", "PREMIUM", "ELITE"];

  const benefits = [
    {
      icon: <BookOpen size={18} />,
      title: "Học 7 Module cốt lõi",
      values: [true, true, true],
    },
    {
      icon: <Briefcase size={18} />,
      title: "Dự án thực tế cùng doanh nghiệp",
      values: [true, true, true],
    },
    {
      icon: <Presentation size={18} />,
      title: "Workshop chuyên đề",
      values: ["2 buổi", "4 buổi", "6 buổi"],
    },
    {
      icon: <Users size={18} />,
      title: "Giảng viên đồng hành",
      values: ["Nhóm", "Nhóm + 1:1", "1:1"],
    },
    {
      icon: <UserCheck size={18} />,
      title: "Cố vấn riêng (Mentor)",
      values: [false, "2 buổi", "4 buổi"],
    },
    {
      icon: <Building2 size={18} />,
      title: "Tham quan doanh nghiệp",
      values: ["1 lần", "2 lần", "3 lần"],
    },
    {
      icon: <Award size={18} />,
      title: "Chứng nhận hoàn thành",
      values: [true, true, true],
    },
    {
      icon: <Network size={18} />,
      title: "Sự kiện Networking cao cấp",
      values: [false, true, true],
    },
    {
      icon: <Star size={18} />,
      title: "Ưu tiên tham gia chương trình đặc biệt",
      values: [false, true, true],
    },
    {
      icon: <Globe size={18} />,
      title: "Cộng đồng Junior CEO",
      values: ["Thành viên", "Thành viên VIP", "Thành viên VIP+"],
    },
  ];

  const renderValue = (val: string | boolean) => {
    if (val === true)
      return (
        <Check className="size-6 font-bold text-[#f3d9a9] mx-auto" size={20} />
      );
    if (val === false)
      return <X className="size-6 text-gray-500 mx-auto" size={20} />;
    return <span className="text-zinc-300 text-sm">{val}</span>;
  };

  return (
    <section className="bg-black pt-12">
      <div className="mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="hidden lg:block h-px w-50 bg-linear-to-r from-transparent to-[#f3d9a9]" />
          <h2 className="text-3xl md:text-4xl text-center lg:text-left font-bold tracking-widest uppercase bg-linear-to-b from-[#f3d9a9] to-[#a67c37] bg-clip-text text-[#f3d9a9] lg:text-transparent">
            SO SÁNH QUYỀN LỢI CÁC GÓI HỌC
          </h2>
          <div className="hidden lg:block h-px w-50 bg-linear-to-l from-transparent to-[#f3d9a9]" />
        </div>

        {/* Desktop & Mobile Table Container */}
        <div className="overflow-x-auto border border-zinc-800 rounded-xl bg-[#0a0a0a]/50 backdrop-blur-sm">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border border-white/25">
                <th className="p-6 text-base lg:text-lg text-left bg-linear-to-r from-[#f3d9a9] to-[#a67c37] bg-clip-text text-[#f3d9a9] lg:text-transparent font-bold tracking-wider w-1/3">
                  QUYỀN LỢI
                </th>
                {plans.map((plan) => (
                  <th
                    key={plan}
                    className="border border-white/25 p-6 text-center bg-linear-to-r from-[#f3d9a9] to-[#a67c37] bg-clip-text text-[#f3d9a9] lg:text-transparent font-bold tracking-widest uppercase text-base lg:text-lg"
                  >
                    {plan}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {benefits.map((benefit, idx) => (
                <tr
                  key={idx}
                  className="border border-white/25 hover:bg-white/5 transition-colors"
                >
                  <td className="p-4 flex items-center gap-4 text-zinc-300 text-sm lg:text-base">
                    <span className="text-[#f3d9a9] opacity-80">
                      {benefit.icon}
                    </span>
                    {benefit.title}
                  </td>
                  {benefit.values.map((val, i) => (
                    <td
                      key={i}
                      className="border border-white/25 p-4 text-center"
                    >
                      {renderValue(val)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
