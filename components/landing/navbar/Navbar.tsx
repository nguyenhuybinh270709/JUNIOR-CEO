"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NavbarData, NavbarService } from "@/services/navbar-service";
import { NavLinks } from "@/components/landing/navbar/components";
import { MobileMenu } from "@/components/landing/navbar/components/MobileMenu";
import { useLandingRegisterDialogStore } from "@/store/useLandingRegisterDialogStore";

export const menuItems = [
  { name: "TRANG CHỦ", link: "#landing" },
  { name: "CHƯƠNG TRÌNH", link: "#chuong-trinh" },
  { name: "GIẢNG VIÊN", link: "#giang-vien" },
  { name: "HỌC PHÍ", link: "#hoc-phi" },
  { name: "PHỤ HUYNH NÓI GÌ", link: "#hoc-phi" },
  { name: "FAQ", link: "#hoc-phi" },
  { name: "LIÊN HỆ", link: "#hoc-phi" },
];

export function Navbar() {
  const openDialog = useLandingRegisterDialogStore((state) => state.openDialog);

  const [isOpen, setIsOpen] = useState(false);
  const [navbarData, setNavbarData] = useState<NavbarData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await NavbarService.getNavbarConfig();
        setNavbarData(data);
      } catch (error) {
        console.error("Error while fetching Navbar: ", error);
      }
    };

    fetchData();
  }, []);

  if (!navbarData) return null;

  return (
    <nav className="fixed w-full bg-black px-4 md:px-8 py-2 lg:py-4 xl:py-0 flex items-center justify-between border-b border-white/30 z-50">
      {/* Left side */}
      <div className="shrink-0 flex items-center">
        <Link
          href="#landing"
          className="flex items-center"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src={navbarData.navbar_left.image}
            alt="Logo"
            width={150}
            height={50}
            className="h-auto w-auto object-contain transition-all duration-300"
            priority
          />
        </Link>
      </div>

      {/* Middle side */}
      <NavLinks />

      {/* Right side */}
      <div className="flex items-center gap-4 shrink-0">
        {/* Action buttons */}
        {navbarData.navbar_right.map((item, index) => {
          return (
            <button
              key={index}
              className="hidden md:flex bg-linear-to-r from-[#d4b075] to-[#c59c5d] px-4 py-2 rounded-md font-semibold text-black items-center gap-2 hover:opacity-90 text-xs md:text-sm whitespace-nowrap transition-all duration-200 ease-in-out hover:scale-102 cursor-pointer"
              onClick={openDialog}
            >
              <p>{item.label}</p>
            </button>
          );
        })}

        <button
          className="lg:hidden text-white p-2 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <MobileMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        buttons={navbarData.navbar_right}
      />
    </nav>
  );
}
