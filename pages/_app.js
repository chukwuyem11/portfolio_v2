import "@/styles/globals.css";
import { ThemeProvider } from "@emotion/react";

const theme = {
  colors: {
    active_color: "#12a4f1",
    inactive_color: "#07344b",
    lightBlue: "#e8f7ff",
    Neutral_100: "#FFFFFF",
    Neutral_200: "#F7F9FD",
    Neutral_300: "#E7EBF4",
    Neutral_400: "#C5CBDA",
    Neutral_500: "#B0B6C5",
    Neutral_600: "#777C88",
    Neutral_700: "#52555D",
    Neutral_800: "#111111",
    Success_100: "#D1FADF",
    Error_100: "#FEE4E2",
    Red1: "#D82C0D",
    Red2: "#E26149",
    Red3: "#EB9586",
    Red4: "#F1B5AA",
    Red5: "#FFEDED",
  },
};
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
