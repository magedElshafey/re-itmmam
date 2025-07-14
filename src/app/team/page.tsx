import Hero from "../../components/common/hero/Hero";
import { useTranslation } from "react-i18next";
import bg from "../../assets/assets-min.webp";
import Title from "../../components/common/title/Title";
import icon from "../../assets/detailsImg.png";
import useShareholders from "../home/api/useShareholders";
import Loader from "../../components/common/loader/Loader";
import useFetchEmployee from "../about/api/useFetchEmployee";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link, useNavigate } from "react-router-dom";
import useExecutiveManagment from "../home/api/useExecutiveManagment";
import { About } from "../../types/About";
import useAbout from "../home/api/useAbout";
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
const Teams = () => {
  const { t, i18n } = useTranslation();
  const { isLoading: loadingShareholders, data: shareholders } =
    useShareholders();
  const { isLoading: loadingEmployee, data: employees } = useFetchEmployee();
  const { isLoading: loadingExecutive, data: executives } =
    useExecutiveManagment();
  const { isLoading, data: data } = useAbout();
  const aboutData = data?.find((item: About) => item?.type === "about") || {
    meta_title: "",
    meta_description: "",
    description: "",
    org_structure: "",
    image: "",
  };
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
  const navigate = useNavigate();
  return (
    <>
      {isLoading ||
      loadingShareholders ||
      loadingEmployee ||
      loadingExecutive ? (
        <Loader />
      ) : (
        <div className="overflow-x-hidden">
          <Hero image={bg} title={t("meet our team")} />
          <div className="container mx-auto px-3 md:px-16 lg:px-24 my-4 md:my-6 lg:my-8 xl:my-12">
            {shareholders?.length ? (
              <>
                <div className="my-4 md:my-6 lg:my-8">
                  <Title title={t("Our Founders")} />
                </div>
                {/* <div className="flex items-center md:justify-center gap-2 mb-4 md:mb-5">
                  <div className="flex items-center gap-1">
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
                </div> */}

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 ">
                  {shareholders?.map((item: any, index: number) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-nowrap"
                    >
                      <div className="flex items-center gap-1">
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
                            i18n.language === "ar"
                              ? "xl:text-4xl"
                              : "xl:text-3xl"
                          }`}
                        >
                          {item?.name}
                        </p>
                        <p
                          className={`text-base md:text-md lg:text-lg  ${
                            i18n.language === "ar"
                              ? "xl:text-2xl"
                              : "xl:text-xl"
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
                            i18n.language === "ar"
                              ? "xl:text-4xl"
                              : "xl:text-3xl"
                          }`}
                        >
                          {item?.name}
                        </p>
                        <p
                          className={`text-base md:textmd lg:text-lg text-center text-white ${
                            i18n.language === "ar"
                              ? "xl:text-2xl"
                              : "xl:text-xl"
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
                  <Title title={t("our team")} />
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
                            i18n.language === "ar"
                              ? "xl:text-4xl"
                              : "xl:text-3xl"
                          }`}
                        >
                          {item?.name}
                        </p>
                        <p
                          className={`text-base md:textmd lg:text-lg  ${
                            i18n.language === "ar"
                              ? "xl:text-2xl"
                              : "xl:text-xl"
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
                            i18n.language === "ar"
                              ? "xl:text-4xl"
                              : "xl:text-3xl"
                          }`}
                        >
                          {item?.name}
                        </p>
                        <p
                          className={`text-base md:textmd lg:text-lg text-center text-white ${
                            i18n.language === "ar"
                              ? "xl:text-2xl"
                              : "xl:text-xl"
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
      )}
    </>
  );
};

export default Teams;
