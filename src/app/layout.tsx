import { GLOBAL_CONSTANTS } from "./commons/constanst/global_constanst.constans";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: GLOBAL_CONSTANTS.APP_NAME,
  description: GLOBAL_CONSTANTS.APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="es">
        <body className={inter.className}>{children}</body>
      </html>

  );
}
