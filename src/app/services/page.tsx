import Hero from "../../components/common/hero/Hero";
import assets from "../../assets/assets-min.webp";
import Title from "../../components/common/title/Title";
import MainCard from "../../components/common/cards/MainCard";
import useAllServices from "./api/useAllServices";
import Loader from "../../components/common/loader/Loader";
import Head from "../../components/common/meta/Head";
import { tabTitle } from "../../utils/tabTitle";
import { useTranslation } from "react-i18next";
const Services = () => {
  const {t} = useTranslation()
  const { isLoading, data } = useAllServices();
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <Head title={tabTitle(t("all services"))} />
      <Hero title= {t("all services")} image={assets} />
      <div className="container mx-auto px-8 md:px-16 lg:px-24 my-6 md:my-8">
        {data?.length ? (
          <>
            <Title title="Learn about all our services" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 xl:gap-12">
              {data?.map((item, index) => (
                <MainCard key={index} data={item} index={index} />
              ))}
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Services;
