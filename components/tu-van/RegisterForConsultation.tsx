"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import {
  User,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  Lock,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { TuVanData } from "@/services/tu-van-service";
import Image from "next/image";
import { useToastStore } from "@/store/useToastStore";

type RegisterForConsultationProps = Pick<TuVanData, "item_7" | "item_8">;

const COURSES = ["JUNIOR CEO", "LEGACY 18", "CITIZEN ELITE", "Khác"];

const TIME_SLOTS = {
  morning: ["09:00", "10:30", "11:00"],
  afternoon: ["14:00", "15:30", "16:30"],
  evening: ["19:00", "20:00", "20:30"],
};

const initialForm = {
  parentName: "",
  phoneNumber: "",
  email: "",
  studentName: "",
  studentDateOfBirth: "",
  class: "",
  programs: [] as string[],
  note: "",
  consultationDate: "",
  consultationTime: "",
};

export function RegisterForConsultation({
  item_7,
  item_8,
}: RegisterForConsultationProps) {
  const [index, setIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(5);

  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");

  const { showToast } = useToastStore();
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [isLoading, setIsLoading] = useState(false);

  const DATES = useMemo(() => {
    const daysOfWeek = [
      "CN",
      "Thứ 2",
      "Thứ 3",
      "Thứ 4",
      "Thứ 5",
      "Thứ 6",
      "Thứ 7",
    ];
    const list = [];

    for (let i = 0; i < 14; i++) {
      const current = new Date();
      current.setDate(current.getDate() + i);

      const dayName = daysOfWeek[current.getDay()];
      const dateString = `${String(current.getDate()).padStart(2, "0")}/${String(current.getMonth() + 1).padStart(2, "0")}`;

      list.push({
        day: dayName,
        date: dateString,
        fullDate: current,
      });
    }
    return list;
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerView(2);
      else if (window.innerWidth < 1024) setItemsPerView(3);
      else setItemsPerView(5);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, DATES.length - itemsPerView);

  const prev = () => {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const toggleCourse = (course: string) => {
    setFormData((prev) => {
      const currentPrograms = prev.programs || [];
      const updatedPrograms = currentPrograms.includes(course)
        ? currentPrograms.filter((item) => item !== course)
        : [...currentPrograms, course];
      return { ...prev, programs: updatedPrograms };
    });
  };

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollToFirstError = () => {
    const timer = setTimeout(() => {
      const firstErrorField = scrollContainerRef.current?.querySelector(
        ".border-red-500",
      ) as HTMLElement;

      if (firstErrorField && scrollContainerRef.current) {
        const fieldWrapper = firstErrorField.closest(
          ".space-y-1",
        ) as HTMLElement;
        if (fieldWrapper) {
          scrollContainerRef.current.scrollTo({
            top: fieldWrapper.offsetTop - 75,
            behavior: "smooth",
          });
          firstErrorField.focus({ preventScroll: true });
        }
      }
    }, 50);
    return () => clearTimeout(timer);
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.parentName.trim())
      newErrors.parentName = "Vui lòng nhập tên phụ huynh";
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Vui lòng nhập số điện thoại";
    } else if (!/^\d{10,11}$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = "Số điện thoại không hợp lệ";
    }
    if (!formData.class) newErrors.class = "Vui lòng chọn lớp của con";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFieldsChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e?: React.SyntheticEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    if (isLoading) return;

    const finalPayload = {
      ...formData,
      consultationDate: selectedDate,
      consultationTime: selectedTime,
    };

    if (validate()) {
      try {
        setIsLoading(true);

        const response = await fetch("/api/email/send-tu-van", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(finalPayload),
        });

        if (response.ok) {
          showToast(
            "Đăng ký thành công. Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.",
            "success",
          );
          setFormData(initialForm);
          setSelectedDate("");
          setSelectedTime("");
        } else {
          showToast("Đăng ký thất bại. Vui lòng thử lại sau.", "error");
        }
      } catch (error) {
        showToast("Error, Lỗi kết nối máy chủ");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    } else {
      scrollToFirstError();
    }
  };

  return (
    <div className="bg-[#050505] text-gray-200">
      <div className="mx-auto bg-[#0F0F0F] border border-[#C29555]/30 rounded-xl overflow-hidden shadow-2xl shadow-[#C29555]/10">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left */}
            <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-[#C29555]/20">
              <h2 className="text-center lg:text-left text-[29px] lg:text-3xl font-bold bg-linear-to-br from-[#f3d9a9] to-[#a67c37] bg-clip-text text-[#f3d9a9] lg:text-transparent mb-2 uppercase">
                {item_7.title}
              </h2>
              <p className="text-white/75 text-sm mb-8">{item_7.description}</p>

              <div className="space-y-5">
                <div className="space-y-4">
                  <div className="relative">
                    <label className="text-xs text-white/75 block mb-1">
                      Họ và tên phụ huynh *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-[#C29555]" />
                      <input
                        type="text"
                        placeholder="Nhập họ và tên"
                        className={`w-full bg-[#1A1A1A] border ${errors.parentName ? "border-red-500" : "border-gray-800"} rounded-md py-3 pl-10 pr-4 text-sm focus:border-[#C29555] outline-none transition-all`}
                        value={formData.parentName}
                        onChange={(e) =>
                          handleFieldsChange("parentName", e.target.value)
                        }
                      />
                    </div>
                    {errors.parentName && (
                      <p className="text-red-500 text-xs mt-2 ml-1">
                        {errors.parentName}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                      <label className="text-xs text-white/75 block mb-1">
                        Số điện thoại *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-[#C29555]" />
                        <input
                          type="tel"
                          placeholder="Nhập số điện thoại"
                          className={`w-full bg-[#1A1A1A] border ${errors.phoneNumber ? "border-red-500" : "border-gray-800"} rounded-md py-3 pl-10 pr-4 text-sm focus:border-[#C29555] outline-none transition-all`}
                          value={formData.phoneNumber}
                          onChange={(e) =>
                            handleFieldsChange("phoneNumber", e.target.value)
                          }
                        />
                      </div>
                      {errors.phoneNumber && (
                        <p className="text-red-500 text-xs mt-2 ml-1">
                          {errors.phoneNumber}
                        </p>
                      )}
                    </div>
                    <div className="relative">
                      <label className="text-xs text-white/75 block mb-1">
                        Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-[#C29555]" />
                        <input
                          type="email"
                          placeholder="Nhập email"
                          className="w-full bg-[#1A1A1A] border border-gray-800 rounded-md py-3 pl-10 pr-4 text-sm focus:border-[#C29555] outline-none transition-all"
                          value={formData.email}
                          onChange={(e) =>
                            handleFieldsChange("email", e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <label className="text-xs text-white/75 block mb-1">
                      Họ và tên học viên
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-[#C29555]" />
                      <input
                        type="text"
                        placeholder="Nhập họ và tên học viên"
                        className="w-full bg-[#1A1A1A] border border-gray-800 rounded-md py-3 pl-10 pr-4 text-sm focus:border-[#C29555] outline-none transition-all"
                        value={formData.studentName}
                        onChange={(e) =>
                          handleFieldsChange("studentName", e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                      <label className="text-xs text-white/75 block mb-1">
                        Ngày sinh học viên
                      </label>
                      <input
                        type="date"
                        className="w-full bg-[#1A1A1A] border border-gray-800 rounded-md py-3 px-4 text-sm outline-none text-white/75"
                        value={formData.studentDateOfBirth}
                        onChange={(e) =>
                          handleFieldsChange(
                            "studentDateOfBirth",
                            e.target.value,
                          )
                        }
                      />
                    </div>
                    <div className="relative">
                      <label className="text-xs text-white/75 block mb-1">
                        Lớp / Khối *
                      </label>
                      <div className="relative">
                        <select
                          className={`w-full bg-[#1A1A1A] border ${errors.class ? "border-red-500" : "border-gray-800"} rounded-md py-3 pl-4 pr-10 text-sm outline-none text-white/75 appearance-none cursor-pointer`}
                          value={formData.class}
                          onChange={(e) =>
                            handleFieldsChange("class", e.target.value)
                          }
                        >
                          <option value={""}>Chọn lớp</option>
                          {[
                            "Lớp 6",
                            "Lớp 7",
                            "Lớp 8",
                            "Lớp 9",
                            "Lớp 10",
                            "Lớp 11",
                            "Lớp 12",
                            "khác",
                          ].map((item) => (
                            <option key={item} className="capitalize">
                              {item}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-white/50 pointer-events-none" />
                      </div>

                      {errors.class && (
                        <p className="text-red-500 text-xs mt-2 ml-1">
                          {errors.class}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs text-white/75">
                      Bạn quan tâm đến chương trình nào?
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {COURSES.map((course) => {
                        const isChecked = formData.programs.includes(course);
                        return (
                          <label
                            key={course}
                            className="flex items-center space-x-2 cursor-pointer group"
                          >
                            <div
                              className={`size-4 border border-[#C29555] rounded flex items-center justify-center transition-colors ${isChecked ? "bg-[#C29555]" : "group-hover:bg-[#C29555]/20"}`}
                            >
                              {isChecked && (
                                <svg
                                  className="size-3 text-black fill-current"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                                </svg>
                              )}
                              <input
                                type="checkbox"
                                className="hidden"
                                checked={isChecked}
                                onChange={() => toggleCourse(course)}
                              />
                            </div>
                            <span className="text-xs text-gray-300">
                              {course}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  <div className="relative">
                    <label className="text-xs text-white/75 block mb-1">
                      Bạn muốn chuyên gia tư vấn về điều gì?
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Nhập nội dung bạn quan tâm..."
                      className="w-full bg-[#1A1A1A] border border-gray-800 rounded-md py-3 px-4 text-sm focus:border-[#C29555] outline-none transition-all resize-none"
                      value={formData.note}
                      onChange={(e) =>
                        handleFieldsChange("note", e.target.value)
                      }
                    />
                  </div>
                </div>

                <button
                  className="w-full text-base lg:text-lg bg-linear-to-r from-[#C29555] to-[#8E6B3E] text-black font-bold py-3.5 rounded-lg flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all uppercase shadow-lg shadow-[#C29555]/20 cursor-pointer disabled:opacity-80"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    "Đang gửi ..."
                  ) : (
                    <>
                      Đăng ký tư vấn ngay <ArrowRight size={18} />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-[10px] text-gray-500 mt-4">
                  <Lock size={12} className="text-[#C29555]" />
                  Thông tin của bạn được bảo mật tuyệt đối.
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="p-8 md:p-12 bg-[#0A0A0A]/50">
              <h2 className="text-3xl font-bold bg-linear-to-bl from-[#f3d9a9] to-[#a67c37] bg-clip-text text-[#f3d9a9] lg:text-transparent mb-2 uppercase text-center lg:text-left">
                {item_8.title}
              </h2>
              <p className="text-white/75 text-sm mb-8 text-center lg:text-left">
                {item_8.description}
              </p>

              <div className="relative flex items-center gap-2 mb-8">
                <button
                  type="button"
                  onClick={prev}
                  className="p-2 border border-gray-600 rounded-full hover:border-[#C29555] transition-colors shrink-0 z-10 bg-[#0F0F0F] cursor-pointer"
                >
                  <ChevronLeft size={20} />
                </button>

                <div className="overflow-hidden w-full">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                      transform: `translateX(-${index * (100 / itemsPerView)}%)`,
                    }}
                  >
                    {DATES.map((item, idx) => {
                      const isDateActive = selectedDate === item.date;

                      return (
                        <div
                          key={idx}
                          className="shrink-0 px-1"
                          style={{ width: `${100 / itemsPerView}%` }}
                        >
                          <button
                            type="button"
                            onClick={() => setSelectedDate(item.date)}
                            className={`w-full flex flex-col items-center py-2 border rounded-lg transition-all cursor-pointer
                                ${
                                  isDateActive
                                    ? "border-[#C29555] bg-[#C29555] text-black font-bold shadow-lg shadow-[#C29555]/20 scale-105"
                                    : "border-gray-700 bg-transparent text-gray-400 hover:border-white/50 hover:text-white/80"
                                }`}
                          >
                            <span className="text-[10px] font-semibold uppercase">
                              {item.day}
                            </span>
                            <span className="text-xs font-bold">
                              {item.date}
                            </span>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={next}
                  className="p-2 border border-gray-600 rounded-full hover:border-[#C29555] transition-colors shrink-0 z-10 bg-[#0F0F0F] cursor-pointer"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              <div className="space-y-6">
                {Object.entries(TIME_SLOTS).map(([session, times]) => (
                  <div key={session} className="space-y-3">
                    <p className="text-sm font-bold text-[#C29555] uppercase">
                      Buổi{" "}
                      {session === "morning"
                        ? "Sáng"
                        : session === "afternoon"
                          ? "Chiều"
                          : "Tối"}
                    </p>
                    <div className="grid grid-cols-3 gap-3">
                      {times.map((t) => {
                        const isTimeActive = selectedTime === t;

                        return (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setSelectedTime(t)}
                            className={`py-2 text-sm rounded-md border transition-all cursor-pointer font-semibold
                                ${
                                  isTimeActive
                                    ? "border-[#C29555] bg-[#C29555] text-black font-bold shadow-md shadow-[#C29555]/10"
                                    : "border-gray-800 bg-[#141414] text-gray-400 hover:border-white/40 hover:text-white/80"
                                }`}
                          >
                            {t}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 border border-[#C29555]/20 rounded-xl bg-linear-to-b from-[#111] to-[#050505]">
                <h3 className="text-center text-2xl font-bold bg-linear-to-b from-[#f3d9a9] to-[#a67c37] bg-clip-text text-[#f3d9a9] lg:text-transparent mb-6 uppercase">
                  {item_8.consult_method.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {item_8.consult_method.methods.map((method, index) => {
                    return (
                      <button
                        key={index}
                        type="button"
                        className="flex flex-col items-center text-center group"
                      >
                        <div className="mb-2 shrink-0 size-14 lg:size-16 flex items-center justify-center">
                          <Image
                            src={method.icon}
                            alt={method.label}
                            width={56}
                            height={56}
                            className="object-contain w-full h-full"
                          />
                        </div>
                        <p className="text-sm font-bold mb-1 text-[#f3d9a9]">
                          {method.label}
                        </p>
                        <p className="text-xs text-gray-300">
                          {method.sub_label}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
