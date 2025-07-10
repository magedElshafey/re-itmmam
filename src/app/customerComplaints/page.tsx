import Hero from "../../components/common/hero/Hero";
import bg from "../../assets/assets-min.webp";
import HtmlRenderer from "../../components/common/html/HtmlRender";
import Loader from "../../components/common/loader/Loader";
import Head from "../../components/common/meta/Head";
import { tabTitle } from "../../utils/tabTitle";
import { useTranslation } from "react-i18next";
import useStaticPages from "../../hooks/api/useStaticPages";
import Contact from "../../components/home/contact/Contact";
import RegisterInterst from "../../components/home/RegisterInterst";
interface ComplaintsProps {
  darkLogo: string;
}
const Page: React.FC<ComplaintsProps> = ({ darkLogo }) => {
  const { t } = useTranslation();
  const { isLoading, pageData } = useStaticPages("client-complaints");
  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Head title={tabTitle(t("Customer complaints"))} />
      <Hero
        image={pageData?.image || bg}
        title={pageData?.name || t("Customer complaints")}
      />
      <div className="container mx-auto px-8 md:px-16 lg:px-24 my-5 md:my-8">
        {pageData?.description && <HtmlRenderer html={pageData?.description} />}
      </div>
      <div className="w-screen bg-[#F5F5F5]  py-5">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 lg:gap-8 mt-6 md:mt-8 xl:mt-10">
            <div className="w-full md:w-1/2">
              <RegisterInterst
                email="complaint@itmaminvest.com"
                darkLogo={darkLogo}
              />
            </div>
            <div className="w-full md:w-1/2">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
