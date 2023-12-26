import "@/styles/globals.css";
import { Header } from "@/components/Sagar-Header";
export default function App({ Component, pageProps }) {
  return (
    <Header>
      <Component {...pageProps} />
    </Header>
  );
}
