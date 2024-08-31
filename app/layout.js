import { Nunito } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Next Weather",
  description:
    "A Weather app that fetches weather data based on the user's location or a searched city.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
