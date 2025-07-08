import Head from "../../components/common/meta/Head";
import { tabTitle } from "../../utils/tabTitle";
import Hero from "../../components/common/hero/Hero";
import { useTranslation } from "react-i18next";
import hero from "../../assets/assets-min.webp";
import BgForm from "../../components/common/bgForm/BgForm";
import MainInput from "../../components/common/inputs/MainInput";
import SendButton from "../../components/common/buttons/SendButton";
import MainTextArea from "../../components/common/inputs/MainTextArea";
import Logo from "../../components/common/logo/Logo";
import useCallusLogic from "./logic/useCallusLogic";
interface CallusPageProps {
  phone1?: string;
  phone2?: string;
  email?: string;
  logo?: string;
}
const CallusPage: React.FC<CallusPageProps> = ({
  phone1,
  phone2,
  email,
  logo,
}) => {
  const { t } = useTranslation();
  const {
    states: { name, phone, email: emailInput, message },
    handlers: {
      handleNameChange,
      handlePhoneChange,
      handleEmailChange,
      handleMessageChnage,
      handleSubmit,
    },
    isPending,
  } = useCallusLogic();
  return (
    <>
      <Head title={tabTitle(t("contact us"))} />
      <Hero title="call us" image={hero} />
      <div className="container mx-auto px-8 md:px-16 lg:px-24 my-6 md:my-8">
        {phone1 && (
          <p className="font-bold text-md md:text-lg lg:text-xl xl:text-2xl mb-2">
            {t("Contact us on the following numbers")} :
          </p>
        )}
        <ul className="mb-5 lg:mb-8">
          {phone1 && (
            <li className="flex items-center gap-2 flex-wrap mb-2">
              <p>- {t("phone number 1")} :</p>
              <a dir="ltr" href={`tel:${phone1}`} className="font-bold">
                {phone1}
              </a>
            </li>
          )}
          {phone2 && (
            <li className="flex items-center gap-2 flex-wrap">
              <p>- {t("phone number 2")} :</p>
              <a dir="ltr" href={`tel:${phone2}`} className="font-bold">
                {phone2}
              </a>
            </li>
          )}
        </ul>
        <p className="font-bold text-md md:text-lg lg:text-xl xl:text-2xl mb-2">
          {t("For comments and suggestions")} :
        </p>
        <p className="mb-4">
       {t("You may submit any suggestion, complaint, or objection to any service provided by Etmam Investment Company or one of its employees during working hours. It can be submitted orally, in writing, through the main branch, by phone, or by e-mail through the following numbers and addresses.")}
        </p>
        <ul className="mb-6 lg:mb-8">
          {phone1 && (
            <li className="flex items-center gap-2 flex-wrap mb-2">
              <p>- {t("phone number 1")} :</p>
              <a dir="ltr" href={`tel:${phone1}`} className="font-bold">
                {phone1}
              </a>
            </li>
          )}
          {phone2 && (
            <li className="flex items-center gap-2 flex-wrap">
              <p>- {t("phone number 2")} :</p>
              <a dir="ltr" href={`tel:${phone2}`} className="font-bold">
                {phone2}
              </a>
            </li>
          )}
          {email && (
            <li className="flex items-center gap-2 flex-wrap">
              <p>- {t("email")} :</p>
              <a
                href={`mailto:${email}`}
                className="font-bold lowercase duration-300 hover:underline"
              >
                {email}
              </a>
            </li>
          )}
        </ul>
        <BgForm>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-6 lg:gap-8">
            <div>
              {logo && <Logo logo={logo} />}
              <p className="text-darkMainColor text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mt-2">
                {t("send message to us")}
              </p>
              {email && (
                <a
                  href={`mailto${email}`}
                  target="blank"
                  className="lowercase text-darkPurpleColor duration-300 hover:underline"
                >
                  {email}
                </a>
              )}
            </div>
            <form onSubmit={handleSubmit}>
              <div className="my-3">
                <MainInput
                  type="text"
                  placeholder="name"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
              <div className="my-3">
                <MainInput
                  type="text"
                  placeholder="phone"
                  value={phone}
                  onChange={handlePhoneChange}
                />
              </div>
              <div className="my-3">
                <MainInput
                  type="email"
                  placeholder="email"
                  value={emailInput}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="my-3">
                <MainTextArea value={message} onChange={handleMessageChnage} />
              </div>
              <div className="w-full flex justify-center">
                <SendButton disabled={isPending} />
              </div>
            </form>
          </div>
        </BgForm>
      </div>
    </>
  );
};

export default CallusPage;
