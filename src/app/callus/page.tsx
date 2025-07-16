import Head from "../../components/common/meta/Head";
import { tabTitle } from "../../utils/tabTitle";
import Hero from "../../components/common/hero/Hero";
import { useTranslation } from "react-i18next";
import hero from "../../assets/assets-min.webp";
// import LocationImage from "../../assets/map.jfif";
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
  const { t, i18n } = useTranslation();
  const { data: settings, isLoading } = useSettings();
  if (isLoading) return <Loader />;
  console.log("settings data is", settings);

  return (
    <>
      <Head title={tabTitle(t("contact us"))} />
      <Hero title="contact us" image={hero} />
      <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-2 gap-y-10 lg:gap-x-20 px-4 md:px-10 lg:px-20 xl:px-40">
        <div className="flex flex-col">
          <h1
            className={
              i18n?.language === "ar"
                ? "text-md md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl"
                : ""
            }
          >
            {t("contact us")}
          </h1>
          <p className="text-base md:text-md lg:text-lg xl:text-xl">
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
          <p className="text-base md:text-md lg:text-lg xl:text-xl">
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
          <p className="text-base md:text-md lg:text-lg xl:text-xl">
            <a
              href={`mailto:${settings?.support_email}`}
              target="_blank"
              rel="noreferrer"
              className="duration-300 hover:underline lowercase"
            >
              {settings?.support_email}
            </a>
          </p>
          <p className="text-base md:text-md lg:text-lg xl:text-xl">
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
          <h1
            className={
              i18n?.language === "ar"
                ? "text-md md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl"
                : ""
            }
          >
            {t("address details")}
          </h1>
          <div
            style={{
              fontSize: "18px",
            }}
          >
            <div
              dangerouslySetInnerHTML={{ __html: settings?.address || "" }}
            />
          </div>
        </div>
        <ContactUsForm />
        {/* <img
          src={LocationImage}
          className="w-full md:w-3/4 object-cover  max-h-[450px] rounded-md shadow-md"
        /> */}
        {settings?.embed_map ? (
          <div className="w-full md:w-3/4 max-h-[450px] rounded-md shadow-md">
            <iframe
              src={settings?.embed_map}
              width="100%"
              height="100%"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default CallusPage;
