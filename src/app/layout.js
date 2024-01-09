import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "../app/providers";
import "@rainbow-me/rainbowkit/styles.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FinCove",
  description: "FinCove Banking Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ToastContainer />
          {children}
        </Providers>
      </body>
    </html>
  );
}
