import "./css/style.css";
import Header from "@/components/ui/header";
import Banner from "@/components/banner";
import { Architects_Daughter } from "next/font/google";
import { Noto_Sans } from "next/font/google";
import { Noto_Serif } from "next/font/google";

const architects_daughter = Architects_Daughter({
  subsets: ["latin"],
  variable: "--font-architects-daughter",
  weight: "400",
  display: "swap",
});

const noto_sans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});
const noto_serif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "AbundEarth Alliance",
  description: "Regenerating Land. Rebuilding Value. Redefining Trade.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${noto_serif.variable} ${noto_sans.variable} ${architects_daughter.variable} font-notoserif antialiased  text-gray-200 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
          <Banner />
        </div>
      </body>
    </html>
  );
}
