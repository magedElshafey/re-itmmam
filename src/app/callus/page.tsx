import Head from "../../components/common/meta/Head";
import { tabTitle } from "../../utils/tabTitle";
import Hero from "../../components/common/hero/Hero";
import { useTranslation } from "react-i18next";
import hero from "../../assets/assets-min.webp";
import LocationImage from "../../assets/map.jpg";
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
  const { data: settings, isLoading } = useSettings();
  if (isLoading) return <Loader />;

  return (
    <>
      <Head title={tabTitle(t("contact us"))} />
      <Hero title="contact us" image={hero} />
      <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-2 gap-y-10 lg:gap-x-20 px-4 md:px-10 lg:px-20 xl:px-40">
        <div className="flex flex-col gap-2">
          <h1>Contact Us</h1>
          <p>
            <a
              dir="ltr"
              href={`https://wa.me/${settings?.phone}`}
              target="_blank"
              rel="noreferrer"
              className="duration-300 hover:underline"
            >
              {settings?.phone}
            </a>
          </p>
          <p>
            <a
              dir="ltr"
              href={`https://wa.me/${settings?.phone2}`}
              target="_blank"
              rel="noreferrer"
              className="duration-300 hover:underline"
            >
              {settings?.phone2}
            </a>
          </p>
          <p>
            <a
              href={`mailto:${settings?.support_email}`}
              target="_blank"
              rel="noreferrer"
              className="duration-300 hover:underline lowercase"
            >
              {settings?.support_email}
            </a>
          </p>
          <p>
            <a
              href={`mailto:${settings?.email}`}
              target="_blank"
              rel="noreferrer"
              className="duration-300 hover:underline lowercase"
            >
              {settings?.email}
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1>address details</h1>
          <div dangerouslySetInnerHTML={{ __html: settings?.address || "" }} />
        </div>
        <ContactUsForm />
        <img
          src={LocationImage}
          className="object-cover object-center max-h-[450px]"
        />
      </div>
    </>
  );
};

export default CallusPage;
