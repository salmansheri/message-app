import AuthProvider from "@/providers/AuthProvider";
import "./globals.css";
import { Inter } from "next/font/google";
import UIProvider from "@/providers/UIProvider";
import GraphQlProvider from "@/providers/GraphQlProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Message app",
  description: "This is a message app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <GraphQlProvider>

        <AuthProvider>
          <UIProvider>{children}</UIProvider>
        </AuthProvider>
        </GraphQlProvider>
      </body>
    </html>
  );
}
