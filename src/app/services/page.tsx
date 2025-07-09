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
  const {t} = useTranslation()

  const {
    query: {
      data: services,
      isLoading: servicesLoading
    }
  } = useNewServices("range_service");

  const {
    query: {
      data: investments,
      isLoading: investmentsLoading
    }
  } = useNewServices("itmam_invest");

  const {
    query: {
      data: footer,
      isLoading: footerLoading
    }
  } = useNewServices("range_service_footer");

  const isLoading = servicesLoading || investmentsLoading || footerLoading;
  
  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Head   
        title={tabTitle(t("Services"))}
      />
      <Hero 
        title= {t("all services")}
        descreption="licensed, integrated, Aligned with your Ambition"
        image={assets} 
      />
      <div className="flex flex-col gap-10 py-4 lg:px-20 md:px-10 px-2 mb-4">
        <Title title="Below is a close look at the three fully regulated offerings that power Itmam Invest end-to-end value proposition each service is delivered under our capital" />
          {
            (services || []).map((service, index) => (
              <ServiceCard 
                service={service}
                index={index}
                key={index}
              />
            ))
          }
        <Title 
          title="Why Itmam Invest?"
        />
        <div className="grid gap-4 grid-cols-[repeat(3,minmax(250px,1fr))]">
            {
              (investments || []).map((card, index) => (
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
              ))
            }
        </div>
        <div 
          dangerouslySetInnerHTML={{__html: footer?.[0].description || ""}}
        />
      </div>
    </>
  );
};

export default Services;
