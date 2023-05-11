import { infoUser } from "@/pages/api/auth/info";
import { setUser } from "@/store/users";
import { useQuery } from "@tanstack/react-query";
import Head from "next/head";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
interface PageContainerProps {
  children: React.ReactNode;
}
export default function PageContainer({ children }: PageContainerProps) {
  const dispatch = useDispatch();
  const { data } = useQuery<any>(["users"], infoUser);
  useEffect(() => {
    dispatch(setUser(data));
  }, [data, dispatch]);
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
