import Logo from "../common/logo/Logo";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
interface RegisterInterstProps {
  email?: string;
  darkLogo?: string;
}
const RegisterInterst: React.FC<RegisterInterstProps> = ({
  email,
  darkLogo,
}) => {
  const { t, i18n } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="w-full flex flex-col items-center"
    >
      <Logo logo={darkLogo} />
      <p
        className={`text-md md:text-lg lg:text-xl  font-bold ${
          i18n.language === "ar" ? "xl:text-4xl" : ""
        }`}
      >
        {t("Register your interest")}
      </p>

      {email ? (
        <>
          <p
            className={`text-center ${
              i18n.language === "ar" ? "text-base md:text-md lg:text-lg" : ""
            }`}
          >
            {t(
              "You can request our consultation by filling out this information and requesting the type of service"
            )}
          </p>
          <a
            href={`mailto:${email}`}
            target="_blank"
            rel="norefeerer"
            className={`lowercase text-darkPurpleColor ${
              i18n.language === "ar"
                ? "text-md md:text-lg lg:text-xl xl:text-2xl"
                : ""
            }`}
          >
            {email}
          </a>
        </>
      ) : null}
    </motion.div>
  );
};

export default RegisterInterst;
