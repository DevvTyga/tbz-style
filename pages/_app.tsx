import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>더보이즈 취향표</title>
        <meta name="description" content="더보이즈 취향표" />

        <meta property="og:title" content="더보이즈 취향표" />
        <meta property="og:description" content="더보이즈 취향표" />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/bucketlistwithfirebase-e3efc.appspot.com/o/tbz-style.png?alt=media&token=5d37526f-bbde-4872-a0ae-8cf44830eadf"
        />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="400" />
        <meta property="og:url" content="https://tbz-style.vercel.app/" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="더보이즈 취향표" />
        <meta property="twitter:url" content="https://tbz-style.vercel.app/" />
        <meta property="twitter:description" content="더보이즈 취향표" />
        <meta
          property="twitter:image"
          content="https://firebasestorage.googleapis.com/v0/b/bucketlistwithfirebase-e3efc.appspot.com/o/tbz-style.png?alt=media&token=5d37526f-bbde-4872-a0ae-8cf44830eadf"
        />
      </Head>
      <div className="font-suite">
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="max-w-lg w-full">
            <RecoilRoot>
              <Component {...pageProps} />
            </RecoilRoot>
          </div>
        </div>
      </div>
    </div>
  );
}
