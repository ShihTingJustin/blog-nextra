// pages/_app.js
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID || ""} />
      <GoogleTagManager gtmId={process.env.GOOGLE_TAG_MANAGER_ID || ""} />
      <Component {...pageProps} />
    </>
  );
};

export default App;
