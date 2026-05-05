"use client";

import { menuItems } from "@/components/landing/navbar/Navbar";
import Link from "next/link";

export function NavLinks() {
  return (
    <div className="hidden lg:flex items-center flex-wrap justify-center gap-x-6 gap-y-4 px-4">
      {menuItems.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.link}
            className={`text-white hover:text-[#D4AF37] text-sm font-medium transition-all duration-200 ease-in-out hover:scale-102 whitespace-nowrap `}
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}
