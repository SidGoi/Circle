import { Quicksand, Pacifico } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const quicksand = Quicksand({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const pacifico = Pacifico({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Circle",
  description: "Create Memories. Celebrate Moments. Welcome to Circle.",
  icons: {
    icon: "/circle-logo.svg",
    shortcut: "/circle-logo.svg",
    apple: "/circle-logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={quicksand.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
