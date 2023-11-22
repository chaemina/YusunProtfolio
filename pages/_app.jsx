import "../styles/globals.css";
// import { Poppins } from "next/font/google";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["100", "400", "500", "600", "700", "800"],
// });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
