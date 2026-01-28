import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";


const font = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300" , "400", "500", "600", "700", "800", "900"]
})

export const metadata: Metadata = {
  title: "React & Next",
  description: "Speedrun FORMACAO.DEV sobre React e Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
      return (
    <html lang="en">
      <body
        className={font.className}
      >
        {children}
      </body>
    </html>
  );
}
