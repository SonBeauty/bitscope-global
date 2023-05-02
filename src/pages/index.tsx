import Head from "next/head";
import LandingPage from "./landing";

export default function Home() {
  return (
    <>
      <Head>
        <title>BITSCOPE</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <LandingPage />
      </main>
    </>
  );
}
