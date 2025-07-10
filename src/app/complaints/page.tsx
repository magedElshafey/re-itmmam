import Head from "../../components/common/meta/Head";
import { tabTitle } from "../../utils/tabTitle";
import Hero from "../../components/common/hero/Hero";
import { useTranslation } from "react-i18next";
import bg from "../../assets/assets-min.webp";
import RegisterInterst from "../../components/home/RegisterInterst";
import Contact from "../../components/home/contact/Contact";
interface ComplaintsProps {
  darkLogo: string;
}
const Complaints: React.FC<ComplaintsProps> = ({ darkLogo }) => {
  const { t } = useTranslation();
  return (
    <>
      <Head title={tabTitle(t("Complaints"))} />
      <div className="overflow-x-hidden">
        <Hero image={bg} title={t("Complaints")} />
        <div className="container mx-auto px-8 md:px-16 lg:px-24 my-8 md:my-10 lg:my-12 xl:my-14">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 lg:gap-8">
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

export default Complaints;
