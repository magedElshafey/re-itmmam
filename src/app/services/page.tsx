import Hero from "../../components/common/hero/Hero";
import assets from "../../assets/assets-min.webp";
import Title from "../../components/common/title/Title";
import Loader from "../../components/common/loader/Loader";
import Head from "../../components/common/meta/Head";
import { tabTitle } from "../../utils/tabTitle";
import { useTranslation } from "react-i18next";
import ServiceCard from "./components/serviceCard";
import useNewServices from "./api/useNewServices";

const Services = () => {
  const { t, i18n } = useTranslation();

  const {
    query: { data: services, isLoading: servicesLoading },
  } = useNewServices("range_service");

  const {
    query: { data: investments, isLoading: investmentsLoading },
  } = useNewServices("itmam_invest");

  const {
    query: { data: footer, isLoading: footerLoading },
  } = useNewServices("range_service_footer");

  const isLoading = servicesLoading || investmentsLoading || footerLoading;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Head title={tabTitle(t("Services"))} />
      <Hero
        title={
          i18n.language === "ar" ? "نطاق خدماتنا" : t("our range of services")
        }
        descreption={t("licensed, integrated, Aligned with your Ambition")}
        image={assets}
      />
      <div className="flex flex-col gap-10 py-4 lg:px-20 md:px-10 px-2 mb-4">
        <p className="text-center w-full md:w-3/4 mx-auto font-medium text-base lg:text-md 2xl:text-xl mt-4">
          {t(
            "Here's a detailed look at the three fully regulated solutions that make up Emaar Investment's integrated value proposition."
          )}
        </p>

        {(services || []).map((service, index) => (
          <ServiceCard service={service} index={index} key={index} />
        ))}
        <div className="mt-5">
          <Title title="Why Itmam Invest?" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {(investments || []).map((card, index) => (
            <div
              className={`flex justify-center overflow-hidden text-center px-2 py-1 font-bold text-xl items-center bg-no-repeat bg-center bg-cover rounded-lg relative h-[400px] flex-shrink-0`}
              key={index}
            >
              <p className="text-7xl font-bold absolute w-fit opacity-80 text-mainColor top-10 left-8">
                {index + 1}
              </p>
              <img
                src={card.image}
                className="absolute opacity-70 z-0 w-full h-full object-cover object-center"
              />
              <div
                className="z-10 text-black/70"
                dangerouslySetInnerHTML={{ __html: card.description }}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <div
            dangerouslySetInnerHTML={{ __html: footer?.[0].description || "" }}
          />
        </div>
      </div>
    </>
  );
};

export default Services;
