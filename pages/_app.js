import { ToolState } from "../states/toolSelected";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ToolState>
      <Component {...pageProps} />
    </ToolState>
  );
}

export default MyApp;
