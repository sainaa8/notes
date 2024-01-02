import "@/styles/globals.css";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Header } from "@/components/Sagar-Header";
export default function App({ Component, pageProps }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <Header>
        <Component {...pageProps} />
      </Header>
    </NextThemesProvider>
  );
}
