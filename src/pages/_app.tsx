import "@/styles/globals.css";
import ProviderTheme from "@/theme";
import type { AppProps } from "next/app";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProviderTheme>
      <Component {...pageProps} />
    </ProviderTheme>
  );
}
