import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Portfolio",
  description: "My First Portfolio created with Next.js and Sanity",
};

export default async function RootLayout({ children, params }) {
  const locale = params.locale;

  // تحقق من وجود اللغة المطلوبة
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // تحميل ملفات الترجمة
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main className="min-h-screen px-4 py-8 max-w-6xl mx-auto">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
