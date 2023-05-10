import Head from "next/head";
import React from "react";
interface PageContainerProps {
  children: React.ReactNode;
}
export default function PageContainer({ children }: PageContainerProps) {
  return (
    <>
      <Head>
        <title>BITSCOPE</title>
        <meta name="description" content="BitScope" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>{children}</main>
    </>
  );
}