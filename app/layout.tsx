
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
// import ThemeSwitch from "@/components/theme-switch";
// import { Toaster } from "react-hot-toast";

// Import the PROVIDER and the SWITCH component
import ThemeContextProvider, { ThemeSwitch } from "@/components/theme-switch";
import { Toaster } from "react-hot-toast";
import ActiveSectionContextProvider from "@/context/active-section-context";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Miguel | Personal Portfolio",
    description: "Miguel is a final-year IT student at Swinburne University of Technology.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="!scroll-smooth">
        <body
            className={`${inter.className} bg-[#E6FFFA] text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
        >
        <div className="bg-[#B2F5EA] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#2C7A7B]"></div>

        <div className="bg-[#BEE3F8] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#2A4365]"></div>

        <ThemeContextProvider>
            <ActiveSectionContextProvider>
                <Header />
                {children}
                <Footer />
                <Toaster position="top-right" />
            </ActiveSectionContextProvider>

            {/* The button itself now sits outside the main content flow */}
            <ThemeSwitch />
        </ThemeContextProvider>
        </body>
        </html>
    );
}