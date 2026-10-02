import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Analytics Dashboard",
  description: "Premium SaaS analytics dashboard",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
        {children}
      </body>
    </html>
  );
}