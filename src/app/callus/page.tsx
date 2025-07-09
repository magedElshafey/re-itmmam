import Head from "../../components/common/meta/Head";
import { tabTitle } from "../../utils/tabTitle";
import Hero from "../../components/common/hero/Hero";
import { useTranslation } from "react-i18next";
import hero from "../../assets/assets-min.webp";
import LocationImage from "../../assets/location-map.png";
import ContactUsForm from "./components/contact-us-form";
import useSettings from "../../hooks/api/useSettings";
import Loader from "../../components/common/loader/Loader";
interface CallusPageProps {
  phone1?: string;
  phone2?: string;
  email?: string;
  logo?: string;
}
const CallusPage: React.FC<CallusPageProps> = () => {
  const { t } = useTranslation();

  const { 
    data: settings,
    isLoading
  } = useSettings();

  if(isLoading) return <Loader />

  return (
    <>
      <Head title={tabTitle(t("contact us"))} />
      <Hero title="contact us" image={hero} />
      <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-2 gap-y-10 lg:gap-x-20 px-4 md:px-10 lg:px-20 xl:px-40">
        <div className="flex flex-col gap-2">
          <h1>Contact Us</h1>
          <p>
            {settings?.phone}
          </p>
          <p>
            {settings?.phone2}
          </p>
          <p>
            {settings?.support_email}
          </p>
          <p>
            {settings?.email}
          </p>
        </div>
        <div className="flex flex-col gap-2">
        <h1>address details</h1>
        <div 
          dangerouslySetInnerHTML={{__html: settings?.address || ""}}
        />
        </div>
        <ContactUsForm />
        <img 
          src={LocationImage}
          className="object-cover object-center"
        />
      </div>
    </>
  );
};

export default CallusPage;
