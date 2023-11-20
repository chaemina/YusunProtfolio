import "../styles/globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "500", "600", "700", "800"],
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main className={poppins.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;

// props로 받은 Component는 요청한 페이지이다.
// GET / 요청을 보냈다면, Component 에는 /pages/index.js 파일이 props로 내려오게 된다.

// pageProps는 페이지 getInitialProps를 통해 내려 받은 props들을 의미한다.
