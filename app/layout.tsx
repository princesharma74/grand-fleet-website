import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Load Futura font
const futura = localFont({
  src: "./fonts/Futura.woff2", // Adjust the path and file type if necessary
  variable: "--font-futura",
  weight: "400 700", // Adjust weights according to the available font file
  style: "normal", // Set the font style
});

export const metadata: Metadata = {
  title: "GrandFleet - Affordable Fleet Management Services",
  description:
    "Streamline your car rental business with GrandFleet's expert solutions. Fleet management from $49/week and website design from $599.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${futura.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}