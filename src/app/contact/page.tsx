import RegisterInterst from "../../components/home/RegisterInterst";
import Contact from "../../components/home/contact/Contact";
import Hero from "../../components/common/hero/Hero";
import bg from "../../assets/assets-min.webp";
import { useTranslation } from "react-i18next";
import Head from "../../components/common/meta/Head";
import { tabTitle } from "../../utils/tabTitle";
interface ContactProps {
  email?: string;
  darkLogo?: string;
}
const ContactPage: React.FC<ContactProps> = ({ email, darkLogo }) => {
  const { t } = useTranslation();
  return (
    <>
      <Head title={tabTitle(t("contact us"))} />
      <Hero image={bg} title={t("Register your interest")} />
      <div className="container mx-auto px-8 md:px-16 lg:px-24 my-5 md:my-8">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 lg:gap-8">
          <div className="w-full md:w-1/2">
            <RegisterInterst email={email} darkLogo={darkLogo} />
          </div>
          <div className="w-full md:w-1/2">
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
