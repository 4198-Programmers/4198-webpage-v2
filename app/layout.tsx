import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Team 4198",
  description: "Official website for Team 4198, the RoboCats from Waconia, Minnesota",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased flex flex-col min-h-screen bg-gradient-to-tr from-[#130810] to-[#271121]`}>
        <Navbar />

        <main className='flex-grow pt-24 px-4 md:px-12'>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
