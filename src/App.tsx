import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
// hooks
import useLocalizeDocumentAttributes from "./hooks/common/ui/useLocalizeDocumentAttributes";
import useSettings from "./hooks/api/useSettings";
import useServiceWithChild from "./hooks/api/useServiceWithChild";
import useNetworkStatus from "./hooks/common/ui/useNetworkStatus";
// common layout
import Loader from "./components/common/loader/Loader";
import Head from "./components/common/meta/Head";
import FixedBtn from "./components/common/buttons/fixed/FixedBtn";
import Navbar from "./layout/navbar/Navbar";
import Footer from "./layout/footer/Footer";
// assets
import whiteLogo from "./assets/whiteLogo-min.webp";
import darkLogo from "./assets/darkLogo-min.webp";
import footerBg from "./assets/footer-bg-min.webp";
// pages
import OfflineNetworkPage from "./app/offline/page";
const Home = lazy(() => import("./app/home/page"));
const About = lazy(() => import("./app/about/page"));
const AboutDetails = lazy(() => import("./app/aboutDetails/AboutDetails"));
const Services = lazy(() => import("./app/services/page"));
const ServiceDetails = lazy(() => import("./app/services/serviceById/page"));
// const Contact = lazy(() => import("./app/contact/page"));
// const Privacy = lazy(() => import("./app/privacy/page"));
// const Terms = lazy(() => import("./app/terms/page"));
// const Policy = lazy(() => import("./app/policy/page"));
const CustomerComplaints = lazy(() => import("./app/customerComplaints/page"));
const Callus = lazy(() => import("./app/callus/page"));
const Lists = lazy(() => import("./app/lists/Lists"));
const Team = lazy(() => import("./app/team/page"));
const NotFound = lazy(() => import("./app/not-found/page"));
const App = () => {
  useLocalizeDocumentAttributes();
  const { isLoading, isError, data } = useSettings();
  const {
    isLoading: loadingServices,
    isError: errorServices,
    data: services,
  } = useServiceWithChild();
  const { isOnline, isPending } = useNetworkStatus();
  if (isLoading || loadingServices || isPending) return <Loader />;
  if (isError || errorServices) return <NotFound />;
  if (!isOnline) return <OfflineNetworkPage />;
  console.log("data from app", data);
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Head
          title={data?.name}
          description={data?.description}
          favicon={data?.favicon}
        />
        <FixedBtn whatsapp={data?.whatsapp} />
        <Navbar
          facebook={data?.facebook}
          instagram={data?.instagram}
          youtube={data?.youtube}
          tiktok={data?.tiktok}
          whatsapp={data?.whatsapp}
          x={data?.x}
          whiteLogo={data?.logo_light || whiteLogo}
          darkLogo={data?.logo_dark || darkLogo}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about/:id" element={<AboutDetails />} />

          <Route
            path="/lists"
            element={
              <Lists
                email={data?.email || ""}
                darkLogo={data?.logo_dark || darkLogo}
              />
            }
          />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id/:slug?" element={<ServiceDetails />} />
          {/* <Route
            path="/contact"
            element={
              <Contact
                email={data?.email}
                darkLogo={data?.logo_dark || darkLogo}
              />
            }
          /> */}
          {/* <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/policy" element={<Policy />} /> */}
          <Route path="/customer-complaints" element={<CustomerComplaints />} />
          <Route
            path="/call-us"
            element={
              <Callus
                phone1={data?.phone}
                phone2={data?.phone2}
                email={data?.email}
                logo={data?.logo_dark || darkLogo}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer
          email={data?.email}
          location={data?.location}
          facebook={data?.facebook}
          instagram={data?.instagram}
          youtube={data?.youtube}
          tiktok={data?.tiktok}
          whatsapp={data?.whatsapp}
          x={data?.x}
          services={services}
          whiteLogo={data?.logo_light || whiteLogo}
          slogan={data?.slogan}
          copyRight={data?.copyrights}
          footer_image={data?.footer_image || footerBg}
          embed_map={data?.embed_map}
          address={data?.address || ""}
          phone1={data?.phone || ""}
          phone2={data?.phone2 || ""}
          support_email={data?.support_email || ""}
        />
      </Suspense>
    </>
  );
};

export default App;
