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
import { whyUs } from "../../data/data";
import Title from "../../components/common/title/Title";
import GrayCard from "../../components/common/cards/GrayCard";
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
        {whyUs?.length ? (
          <div className="my-5 md:my-6 lg:my-7 xl:my-8">
            <Title title="Why Investors Choose Us" />{" "}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {whyUs?.map((item, index) => (
                <GrayCard key={index} index={index} data={item} />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default HomePage;
