import { ToastProvider } from "@/components/toast";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/app/globals.css";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { RegisterDialog } from "@/components/landing/dialog/RegisterDialog";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JUNIOR CEO - Đào tạo CEO - Kinh doanh - Khởi nghiệp từ 11-17 tuổi",
  description:
    "JUNIOR CEO - Đào tạo CEO - Kinh doanh - Khởi nghiệp từ 11-17 tuổi",
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${montserrat.className} font-main h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-black">
        <Navbar />
        <main className="min-h-screen">
          <ToastProvider />
          {children}

          {/* Dialog */}
          <RegisterDialog />
        </main>
        <Footer />
      </body>
    </html>
  );
}
