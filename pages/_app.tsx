import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import "../styles/globals.css";
const inter = Inter({ weight: "400", subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
