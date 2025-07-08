import Hero from "../../components/common/hero/Hero";
import bg from "../../assets/bg-img-min.webp";
// import Title from "../../components/common/title/Title";
// import MainCard from "../../components/common/cards/MainCard";
// import { GoArrowUpLeft } from "react-icons/go";
// import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import Vission from "../../components/home/Vission";
// import Message from "../../components/home/Message";
// import Contact from "../../components/home/contact/Contact";
// import RegisterInterst from "../../components/home/RegisterInterst";
import useHeroSection from "./api/useHeroSection";
import Loader from "../../components/common/loader/Loader";
import ErrorPopup from "../../components/common/popup/ErrorPoup";
import useMainServices from "./api/useMainServices";
// import { MainServices } from "../../types/MainServices";
import useAbout from "./api/useAbout";
// import { About } from "../../types/About";
import hero from "../../assets/hero-min.webp";
interface HomeProps {
  email?: string;
  darkLogo?: string;
}
const HomePage: React.FC<HomeProps> = ({ email, darkLogo }) => {
  const { t, i18n } = useTranslation();
  const { isError, isLoading, data } = useHeroSection();
  const {
    isError: aboutError,
    isLoading: loadingAbout,
    data: about,
  } = useAbout();
  const {
    isError: isErrorMainServices,
    isLoading: isLoadingMainServices,
    data: mainServices,
  } = useMainServices();

  if (isLoading || isLoadingMainServices || loadingAbout) {
    return <Loader />;
  }
  if (isError || isErrorMainServices || aboutError) {
    return (
      <ErrorPopup
        title="حدث خطأ حاول مرة اخرى"
        subTitle="قم بإعادة تحميل الصفحة"
      />
    );
  }
  // const messages = about?.filter((item: About) => item?.type === "message");
  // const vission = about?.filter((item: About) => item?.type === "vision");
  // const values = about?.filter((item: About) => item?.type === "values");
  console.log("hero services", mainServices);
  return (
    <div className="overflow-x-hidden">
      <Hero
        image={data?.image || hero}
        title={data?.name || ""}
        descreption={data?.description}
        metaDescreption={data?.sub_description}
        btns={[
          {
            name: "contact us",
            path: "/contact",
          },
          {
            name: "more",
            path: "/services",
          },
        ]}
      />
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "110px",
        }}
      ></div>
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* {mainServices?.length && (
          <>
            <Title title="our main services" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 xl:gap-12 mb-8">
              {mainServices
                ?.slice(0, 3)
                ?.map((item: MainServices, index: number) => (
                  <MainCard key={index} data={item} index={index} />
                ))}
            </div>
            <div className="w-full flex justify-center mb-8">
              <Link
                to="/services"
                className={`flex items-center justify-center gap-1 bg-white py-3 px-4 rounded-3xl border border-mainColor text-mainColor duration-300 hover:bg-mainColor hover:text-white ${
                  i18n.language === "ar" ? "text-md lg:text-xl" : ""
                }`}
              >
                <span>{t("View all our services")}</span>
                <GoArrowUpLeft />
              </Link>
            </div>
          </>
        )} */}
        {/* {vission?.length ? <Vission data={vission[0]} /> : null} */}
        {/* {messages?.length ? (
          <div className="my-6 md:my-8">
            <Title title="message" />
            <Message data={messages} hasDesc={false} />
          </div>
        ) : null} */}
        {/* {values?.length ? (
          <div className="my-6 md:my-8">
            <Title title="our values" />
            <Message data={values} hasDesc={true} />
          </div>
        ) : null} */}
        {/* <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 lg:gap-8">
          <div className="w-full md:w-1/2">
            <RegisterInterst email={email} darkLogo={darkLogo} />
          </div>
          <div className="w-full md:w-1/2">
            <Contact />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HomePage;
