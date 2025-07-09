import Hero from "../../components/common/hero/Hero";
import useHeroSection from "./api/useHeroSection";
import Loader from "../../components/common/loader/Loader";
import ErrorPopup from "../../components/common/popup/ErrorPoup";
import hero from "../../assets/hero-min.webp";
import Title from "../../components/common/title/Title";
import GrayCard from "../../components/common/cards/GrayCard";
import useWhyUs from "./api/useWhyUs";
import useHomePage from "./api/useHomePage";
import HtmlRenderer from "../../components/common/html/HtmlRender";
const HomePage = () => {
  const { isError, isLoading, data } = useHeroSection();
  const {
    isError: whyUsError,
    isLoading: loadingWhyUs,
    data: whyUsData,
  } = useWhyUs();
  const {
    isError: homePageError,
    isLoading: loadingHomePage,
    data: homePage,
  } = useHomePage();
  console.log("homePage", homePage);
  if (isLoading || loadingWhyUs || loadingHomePage) {
    return <Loader />;
  }
  if (isError || whyUsError || homePageError) {
    return (
      <ErrorPopup
        title="حدث خطأ حاول مرة اخرى"
        subTitle="قم بإعادة تحميل الصفحة"
      />
    );
  }
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

      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {whyUsData?.length ? (
          <div className="my-5 md:my-6 lg:my-7 xl:my-8">
            <Title title="Why Investors Choose Us" />{" "}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {whyUsData?.map((item: any, index: number) => (
                <GrayCard key={index} data={item} />
              ))}
            </div>
          </div>
        ) : null}
        <div className="w-full bg-[#00F9FF] bg-opacity-[8%] flex items-center flex-col md:flex-row gap-4 mb-5 md:mb-6 lg:mb-8">
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5">
            <img
              alt={homePage[0]?.title}
              src={homePage[0]?.image}
              className="w-full object-cover rounded-md h-[300px]"
            />
          </div>
          <div className="flex-1">
            <p className="text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl font-bold mb-4">
              {homePage[0]?.title}
            </p>
            <HtmlRenderer html={homePage[0]?.description} />
          </div>
        </div>
        <div>
          {homePage[1]?.title ? (
            <p className="text-base md:text-md lg:text-lg  mb-4">
              {homePage[1]?.title}
            </p>
          ) : null}

          <HtmlRenderer html={homePage[1]?.description} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
