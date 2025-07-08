import { createRoot } from "react-dom/client";
import "./style/index.css";
import App from "./App.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./services/api/queryClient.ts";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AxiosConfig from "./services/api/Axios.ts";
import LanguageProvider from "./store/LanguageProvider.tsx";
import ScrollToTop from "./components/common/scrollToTop/ScrollToTop.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")!).render(
  <Router>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <AxiosConfig />
          <ToastContainer />
          <App />
        </LanguageProvider>
        <ScrollToTop />
      </QueryClientProvider>
    </HelmetProvider>
  </Router>
);
