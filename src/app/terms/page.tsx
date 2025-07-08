import Hero from "../../components/common/hero/Hero";
import bg from "../../assets/assets-min.webp";
import HtmlRenderer from "../../components/common/html/HtmlRender";
import useStaticPages from "../../hooks/api/useStaticPages";
import Loader from "../../components/common/loader/Loader";
import Head from "../../components/common/meta/Head";
import { tabTitle } from "../../utils/tabTitle";
import { useTranslation } from "react-i18next";
const TermsPage = () => {
  const { t } = useTranslation();
  const { isLoading, pageData } = useStaticPages("terms-and-conditions");
  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Head title={tabTitle(t("terms and conditionss"))} />
      <Hero
        image={pageData?.image || bg}
        title={pageData?.name || "الشروظ و الأحكام"}
      />
      {pageData?.description && (
        <div className="container mx-auto px-8 md:px-16 lg:px-24 my-5 md:my-8">
          <HtmlRenderer html={pageData?.description} />
        </div>
      )}
    </>
  );
};

export default TermsPage;
