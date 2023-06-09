import { store } from "@/store";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import PageContainer from "@/container/PageContainer";
const queryClient = new QueryClient();
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <PageContainer>
          <ToastContainer />
          <Component {...pageProps} />
        </PageContainer>
      </QueryClientProvider>
    </Provider>
  );
}
