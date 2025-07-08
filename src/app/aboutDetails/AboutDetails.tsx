import Hero from "../../components/common/hero/Hero";
import bg from "../../assets/assets-min.webp";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Axios } from "../../services/api/Axios";
import Loader from "../../components/common/loader/Loader";
import HtmlRenderer from "../../components/common/html/HtmlRender";
const AboutDetails = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { isLoading, data } = useQuery({
    queryKey: ["about-details", id],
    queryFn: async () => {
      const { data } = await Axios.get(`/job_hierarchy/${id}`);
      return data?.data;
    },
  });
  if (isLoading) {
    return <Loader />;
  }
  console.log("data from about details", data);
  return (
    <>
      <div className="overflow-x-hidden">
        <Hero image={bg} title={t("about us")} />
        <div className="container mx-auto px-8 md:px-16 lg:px-24 my-4 md:my-6 lg:my-8">
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-7 mb-4 md:mb-5 lg:mb-6 xl:mb-7 2xl:mb-8">
            <div>
              <img
                alt={data?.name}
                src={data?.image}
                className="w-[150px]  lg:w-[200px] xl:w-[250px] 2xl:w-[300px] h-[150px]  lg:h-[200px] xl:h-[250px] 2xl:h-[300px] rounded-[50%]"
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl font-bold text-mainColor">
                {data?.name}
              </p>
              <p className="text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-mainColor">
                {data?.position}
              </p>
            </div>
          </div>
          {data?.description && <HtmlRenderer html={data?.description} />}
        </div>
      </div>
    </>
  );
};

export default AboutDetails;
