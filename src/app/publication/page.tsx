import Head from "../../components/common/meta/Head";
import { tabTitle } from "../../utils/tabTitle";
import { useTranslation } from "react-i18next";
import Hero from "../../components/common/hero/Hero";
import bg from "../../assets/assets-min.webp";

const Publication = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head title={tabTitle(t("publication"))} />
      <div className="overflow-x-hidden">
        <Hero image={bg} title={t("publication")} />
      </div>
    </>
  );
};

export default Publication;
