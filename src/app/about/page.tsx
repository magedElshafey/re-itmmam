import Hero from "../../components/common/hero/Hero";
import bg from "../../assets/assets-min.webp";
import about from "../../assets/about.png";
import Loader from "../../components/common/loader/Loader";
import useAbout from "../home/api/useAbout";
import { About } from "../../types/About";
import HtmlRenderer from "../../components/common/html/HtmlRender";
import Head from "../../components/common/meta/Head";
import { tabTitle } from "../../utils/tabTitle";
import { useTranslation } from "react-i18next";
import Title from "../../components/common/title/Title";
import { aboutSuuport } from "../../data/data";
import GrayCard from "../../components/common/cards/GrayCard";
import { ourMandate } from "../../data/data";
import vissionImg from "../../assets/vission.png";
import missionImg from "../../assets/mission.png";
const AboutPage = () => {
  const { t, i18n } = useTranslation();
  const { isLoading, data: data } = useAbout();
  if (isLoading) {
    return <Loader />;
  }
  const values = data?.filter((item: About) => item?.type === "values") || [];
  const aboutData = data?.find((item: About) => item?.type === "about") || {
    meta_title: "",
    meta_description: "",
    description: "",
    org_structure: "",
    image: "",
  };
  const mission = data?.filter((item: About) => item?.type === "mission");
  const vission = data?.filter((item: About) => item?.type === "vision");
  console.log("about data is", data);
  return (
    <>
      <Head
        title={tabTitle(aboutData?.meta_title || t("about us"))}
        description={aboutData?.meta_description || ""}
      />
      <div className="overflow-x-hidden">
        <Hero
          image={bg}
          title={t("about us")}
          descreption={t("We take your wealth to new frontiers")}
        />
        {aboutData?.description && (
          <div className="container mx-auto px-8 md:px-16 lg:px-24  text-center flex items-center justify-center">
            <HtmlRenderer html={aboutData?.description} />
          </div>
        )}
        <div className="container mx-auto px-8 md:px-16 lg:px-24 my-4 md:my-6 lg:my-8 xl:my-12">
          {ourMandate?.length ? (
            <div className="my-4 md:my-5 lg:my-6 xl:my-7">
              <Title title="Our Regulatory Mandate" />
              <p className="w-full md:w-1/2  mx-auto text-center mb-3 md:mb-4 lg:mb-5 xl:mb-6">
                Under our CMA license we are empowered to deliver three
                complementary, fully regulated services:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
                {ourMandate?.map((item, index) => (
                  <div key={index} className="rounded-md">
                    <img
                      alt={item?.title}
                      src={item?.image}
                      className="w-full h-[338px] rounded-md object-cover"
                    />
                    <div className="px-4 mt-5">
                      <p className="text-md md:text-lg lg:text-xl xl:text-2xl font-bold mb-3">
                        {item?.title}
                      </p>
                      <p className="text-center">{item?.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
          {/**mission and vission */}
          <div className="bg-[#00F9FF] py-4 px-8 bg-opacity-[8%]">
            <div className="flex items-center flex-col md:flex-row gap-4 md:gap-5 lg:gap-6 mb-5">
              <div className="flex flex-col items-center gap-2">
                <img
                  alt="vissio"
                  src={vissionImg}
                  className="w-[80px] h-[80px] object-contain"
                />
                <p className="text-base lg:text-md xl:text-xl 2xl:text-3xl font-bold">
                  {t("vission")}
                </p>
              </div>
              {vission?.length ? (
                <div className="flex-1">
                  <HtmlRenderer html={vission[0]?.description} />
                </div>
              ) : null}
            </div>
            <div className="flex items-center flex-col md:flex-row gap-4 md:gap-5 lg:gap-6 n">
              <div className="flex flex-col items-center gap-2">
                <img
                  alt="vissio"
                  src={missionImg}
                  className="w-[80px] h-[80px] object-contain"
                />
                <p className="text-base lg:text-md xl:text-xl 2xl:text-3xl font-bold">
                  {t("our mission")}
                </p>
              </div>
              {mission?.length ? (
                <div className="flex-1">
                  <HtmlRenderer html={mission[0]?.description} />
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="w-screen overflow-hidden flex flex-col md:flex-row items-center gap-4 md:gap-6 lg:gap-8 bg-[#A56FCC] bg-opacity-20 my-4 md:my-5 lg:my-6 xl:my-7 2xl:my-8">
          <div className="w-full md:w-1/3">
            <img
              alt="about"
              src={aboutData?.image || about}
              className="w-full h-[300px] md:h-[400px] lg:h-[450px] object-cover"
            />
          </div>
          <div className="w-full flex-1  h-auto md:max-h-[300px] py-4 flex items-center ">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <p
                className={`font-bold text-xl md:text-2xl lg:text-3xl  mb-2  ${
                  i18n.language === "ar" ? "xl:text-5xl" : "xl:text-4xl"
                }`}
              >
                {t("our main values")}
              </p>
              <ul>
                {values?.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 mb-1 flex-wrap"
                  >
                    <p
                      className={`font-bold ${
                        i18n.language === "ar"
                          ? "text-md md:text-lg lg:text-xl xl:text-3xl"
                          : "text-base lg:text-lg"
                      }`}
                    >
                      {item?.name} :
                    </p>
                    <HtmlRenderer html={item?.description} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-8 md:px-16 lg:px-24 my-4 md:my-6 lg:my-8 xl:my-12">
          {/* about supports */}
          {aboutSuuport?.length ? (
            <div className="my-5 md:my-6 lg:my-7 xl:my-8">
              <Title title="What Sets Us Apart" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {aboutSuuport?.map((item, index) => (
                  <GrayCard key={index} index={index} data={item} />
                ))}
              </div>
            </div>
          ) : null}
          {/* partner with itmam */}
          <div>
            <Title title="Partner with Itmam Invest" />
            <p className="text-center">
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but al of type and scrambled it to make a type specimen
              book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged. It
              was popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
