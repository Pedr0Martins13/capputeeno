import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";

const saira = Saira({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Capputeeno",
  description:
    "Capputeeno is a coffee shop website, where you can buy we are products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html style={{ scrollBehavior: "smooth", top: 0, left: 0 }} lang="en">
      <body className={`${saira.className} antialiased bg-gray-100`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
