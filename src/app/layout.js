import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "../app/providers";
import "@rainbow-me/rainbowkit/styles.css";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FinCove",
  description: "FinCove Banking Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        />
      </Head>
      <body className={inter.className}>
          <Providers>{children}</Providers>
      </body>
    </html>
  );
}
