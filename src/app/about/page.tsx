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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useFetchEmployee from "./api/useFetchEmployee";
import Title from "../../components/common/title/Title";
import { Link, useNavigate } from "react-router-dom";
import useExecutiveManagment from "../home/api/useExecutiveManagment";
import useShareholders from "../home/api/useShareholders";
import icon from "../../assets/detailsImg.png";
interface Employee {
  id: number;
  name: string;
  position: string;
  image: string;
  children: {
    id: number;
    name: string;
    position: string;
    image: string;
  }[];
}

const AboutPage = () => {
  const { t, i18n } = useTranslation();
  const { isLoading, data: data } = useAbout();
  const { isLoading: loadingExecutive, data: executives } =
    useExecutiveManagment();
  const { isLoading: loadingShareholders, data: shareholders } =
    useShareholders();
  const { isLoading: loadingEmployee, data: employees } = useFetchEmployee();
  const navigate = useNavigate();
  const getSliderSettings = (itemsLength: number) => {
    const isSingleItem = itemsLength <= 1;

    return {
      dots: false,
      autoplay: !isSingleItem,
      autoplaySpeed: 3000,
      arrows: false,
      infinite: !isSingleItem,
      slidesToShow: isSingleItem ? 1 : 4,
      slidesToScroll: 1,
      rtl: i18n.language === "ar",
      initialSlide:
        i18n.language === "ar" && itemsLength > 0 ? itemsLength - 1 : 0,
      responsive: [
        {
          breakpoint: 1224,
          settings: {
            slidesToShow: isSingleItem ? 1 : 4,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: isSingleItem ? 1 : 2,
          },
        },
        {
          breakpoint: 540,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  };

  if (isLoading || loadingEmployee || loadingExecutive || loadingShareholders) {
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
  return (
    <>
      <Head
        title={tabTitle(aboutData?.meta_title || t("about us"))}
        description={aboutData?.meta_description || ""}
      />
      <div className="overflow-x-hidden">
        <Hero image={bg} title={t("about us")} />
        {aboutData?.description && (
          <div className="container mx-auto px-8 md:px-16 lg:px-24 my-4 md:my-6  text-center flex items-center justify-center">
            <HtmlRenderer html={aboutData?.description} />
          </div>
        )}
        <div className="flex flex-col md:flex-row">
          <div className="w-full flex-1 bg-[#A56FCC] h-auto md:max-h-[300px] py-4 flex items-center bg-opacity-20">
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
          <div className="w-full md:w-1/3">
            <img
              alt="about"
              src={aboutData?.image || about}
              className="w-full max-h-[300px]"
            />
          </div>
        </div>
        <div className="container mx-auto px-8 md:px-16 lg:px-24 my-4 md:my-6 lg:my-8 xl:my-12">
          {shareholders?.length ? (
            <>
              <div className="my-4 md:my-6 lg:my-8 xl:my-12">
                <Title title={t("shareholders")} />
              </div>
              <div className="flex items-center md:justify-center gap-2 mb-4 md:mb-5 lg:mb-6 xl:mb-7 2xl:mb-8">
                <div className="flex items-center gap-1">
                  <p
                    className={`text-darkPurpleColor ${
                      i18n.language === "ar"
                        ? "text-lg md:text-xl lg:text-2xl xl:text-5xl"
                        : "text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl"
                    } `}
                  >
                    1
                  </p>
                  <img
                    alt="icon"
                    src={icon}
                    className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 object-contain"
                    loading="lazy"
                  />
                </div>
                <p
                  className={`text-nowrap ${
                    i18n.language === "ar"
                      ? "text-xl md:text-2xl lg:text-3xl"
                      : "text-base md:text-lg lg:text-xl"
                  }`}
                >
                  {shareholders[0]?.name}
                </p>
              </div>
              <div className="w-full flex md:justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
                  {shareholders?.slice(1)?.map((item: any, index: number) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-nowrap"
                    >
                      <div className="flex items-center gap-1">
                        <p
                          className={`text-darkPurpleColor ${
                            i18n.language === "ar"
                              ? "text-lg md:text-xl lg:text-2xl xl:text-5xl"
                              : "text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl"
                          } `}
                        >
                          {index + 2}
                        </p>
                        <img
                          alt="icon"
                          src={icon}
                          className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 object-contain"
                          loading="lazy"
                        />
                      </div>
                      <p
                        className={` text-nowrap ${
                          i18n.language === "ar"
                            ? "text-xl md:text-2xl lg:text-3xl"
                            : "text-base md:text-lg lg:text-xl"
                        }`}
                      >
                        {item?.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : null}
          {employees?.length ? (
            <>
              <div className="my-4 md:my-6 lg:my-8 xl:my-12">
                <Title title={t("Functional structure")} />
              </div>
              <Slider {...getSliderSettings(employees?.length || 0)}>
                {employees?.map((item: Employee) => (
                  <div
                    dir={i18n.language === "ar" ? "rtl" : "ltr"}
                    key={item?.id}
                    className="px-3 relative duration-300 group overflow-hidden cursor-pointer"
                  >
                    <div className="">
                      <img
                        loading="lazy"
                        alt={item?.name}
                        src={item?.image}
                        className="w-64 mx-auto h-64"
                        // onClick={() => navigate(`/about/${item?.id}`)}
                      />
                    </div>
                    <div className="my-3 flex flex-col items-center justify-center text-mainColor text-center">
                      <p
                        className={`text-lg md:text-xl lg:text-2xl   font-bold ${
                          i18n.language === "ar" ? "xl:text-4xl" : "xl:text-3xl"
                        }`}
                      >
                        {item?.name}
                      </p>
                      <p
                        className={`text-base md:textmd lg:text-lg  ${
                          i18n.language === "ar" ? "xl:text-2xl" : "xl:text-xl"
                        }`}
                      >
                        {item?.position}
                      </p>
                    </div>
                    <div
                      className={`duration-300 absolute left-0 bottom-[-500%] group-hover:bottom-0 w-full h-full bg-black/60 flex flex-col items-center justify-center gap-4 p-3`}
                    >
                      <p
                        className={`text-lg md:text-xl lg:text-2xl text-center text-white font-bold ${
                          i18n.language === "ar" ? "xl:text-4xl" : "xl:text-3xl"
                        }`}
                      >
                        {item?.name}
                      </p>
                      <p
                        className={`text-base md:textmd lg:text-lg text-center text-white ${
                          i18n.language === "ar" ? "xl:text-2xl" : "xl:text-xl"
                        }`}
                      >
                        {item?.position}
                      </p>
                      <Link
                        to={`/about/${item?.id}`}
                        className="overflow-hidden bg-darkPurpleColor flex items-center justify-center uppercase py-3 px-4 rounded-md text-white duration-300 hover:bg-white hover:text-darkPurpleColor w-fit mx-auto border border-darkPurpleColor"
                      >
                        {t("learn more")}
                      </Link>
                    </div>
                  </div>
                ))}
              </Slider>
            </>
          ) : null}
          {executives?.length ? (
            <>
              <div className="my-4 md:my-6 lg:my-8 xl:my-12">
                <Title title={t("Executive management")} />
              </div>
              <Slider {...getSliderSettings(executives?.length || 0)}>
                {executives?.map((item: Employee) => (
                  <div
                    dir={i18n.language === "ar" ? "rtl" : "ltr"}
                    key={item?.id}
                    className="px-3 relative duration-300 group overflow-hidden cursor-pointer"
                  >
                    <div className="">
                      <img
                        loading="lazy"
                        alt={item?.name}
                        src={item?.image}
                        className="w-64 mx-auto h-64 cursor-pointer"
                        onClick={() => navigate(`/about/${item?.id}`)}
                      />
                    </div>
                    <div className="mt-3 flex flex-col items-center justify-center text-mainColor text-center">
                      <p
                        className={`text-lg md:text-xl lg:text-2xl   font-bold ${
                          i18n.language === "ar" ? "xl:text-4xl" : "xl:text-3xl"
                        }`}
                      >
                        {item?.name}
                      </p>
                      <p
                        className={`text-base md:textmd lg:text-lg  ${
                          i18n.language === "ar" ? "xl:text-2xl" : "xl:text-xl"
                        }`}
                      >
                        {item?.position}
                      </p>
                    </div>
                    <div
                      className={`duration-300 absolute left-0 bottom-[-500%] group-hover:bottom-0 w-full h-full bg-black/60 flex flex-col items-center justify-center gap-4 p-3`}
                    >
                      <p
                        className={`text-lg md:text-xl lg:text-2xl text-center text-white font-bold ${
                          i18n.language === "ar" ? "xl:text-4xl" : "xl:text-3xl"
                        }`}
                      >
                        {item?.name}
                      </p>
                      <p
                        className={`text-base md:textmd lg:text-lg text-center text-white ${
                          i18n.language === "ar" ? "xl:text-2xl" : "xl:text-xl"
                        }`}
                      >
                        {item?.position}
                      </p>
                      <Link
                        to={`/about/${item?.id}`}
                        className="overflow-hidden bg-darkPurpleColor flex items-center justify-center uppercase py-3 px-4 rounded-md text-white duration-300 hover:bg-white hover:text-darkPurpleColor w-fit mx-auto border border-darkPurpleColor"
                      >
                        {t("learn more")}
                      </Link>
                    </div>
                  </div>
                ))}
              </Slider>
            </>
          ) : null}

          <div className="my-4 md:my-6 lg:my-8 xl:my-12">
            <Title title={t("Organizational structure")} />
          </div>
          <div className="w-full mt-4 md:mt-6 lg:mt-8 md:w-[80%] mx-auto">
            <img
              className="w-full max-h-[480px]"
              alt={aboutData?.meta_title || ""}
              src={aboutData?.org_structure}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
