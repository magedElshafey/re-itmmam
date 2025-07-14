import { useTranslation } from "react-i18next";
import Social from "../../components/common/social/Social";
import { ServiceWithChild } from "../../types/ServiceWithChild";
import { motion } from "framer-motion";
import CopyRight from "./components/copyright/CopyRight";
import HtmlRenderer from "../../components/common/html/HtmlRender";
import { useNavigate } from "react-router-dom";
import FooterLinks from "./components/footerLinks/FooterLinks";
interface FooterProps {
  email?: string;
  location?: string;
  facebook?: string;
  instagram?: string;
  youtube?: string;
  tiktok?: string;
  whatsapp?: string;
  x?: string;
  services?: ServiceWithChild[];
  whiteLogo: string;
  slogan?: string;
  copyRight?: string;
  footer_image?: string;
  embed_map?: string;
  address: string;
  phone1: string;
  phone2: string;
  support_email: string;
  linkedin: string;
}

const Footer: React.FC<FooterProps> = ({
  email,
  facebook,
  instagram,
  youtube,
  tiktok,
  whatsapp,
  x,
  whiteLogo,
  slogan,
  copyRight,
  footer_image,
  address,
  phone1,
  phone2,
  support_email,
  linkedin,
}) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="w-screen mt-4 relative">
      {footer_image && (
        <img
          src={footer_image}
          alt="Footer Background"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      )}

      <div className="absolute inset-0 bg-black opacity-55"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          bounce: 0.2,
        }}
        className="relative container mx-auto px-3 md:px-16 lg:px-24 py-8 flex items-center"
      >
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3  gap-4 md:gap-6 lg:gap-8 xl:gap-12 mb-8">
            <div>
              <img
                className="w-36 lg:w-44 h-auto cursor-pointer"
                onClick={handleClick}
                src={whiteLogo}
              />
              {slogan && (
                <div className="mt-5">
                  <HtmlRenderer html={slogan} />
                </div>
              )}
            </div>

            <FooterLinks />

            <div>
              <div>
                <h3 className="text-white text-lg md:text-xl lg:text-2xl xl:text-3xl  mb-4 md:mb-5">
                  {t("address details")}
                </h3>
                <div className="text-white">
                  <HtmlRenderer html={address} />
                </div>
              </div>
              <div className="mt-6">
                <h5
                  className={`mb-3 text-white ${
                    i18n.language === "ar"
                      ? "text-md md:text-lg lg:text-xl xl:text-2xl"
                      : ""
                  }`}
                >
                  {t("contact us")}
                </h5>
                <ul className="text-white mb-5">
                  <li className="text-md md:text-lg lg:text-xl  font-medium mb-2">
                    <a
                      dir="ltr"
                      href={`https://wa.me/${phone1}`}
                      target="_blank"
                      rel="noreferrer"
                      className="duration-300 hover:underline"
                    >
                      {phone1}
                    </a>
                  </li>
                  <li className="text-md md:text-lg lg:text-xl  font-medium mb-2">
                    <a
                      dir="ltr"
                      href={`https://wa.me/${phone2}`}
                      target="_blank"
                      rel="noreferrer"
                      className="duration-300 hover:underline"
                    >
                      {phone2}
                    </a>
                  </li>
                  <li className="text-md md:text-lg lg:text-xl  font-medium mb-2">
                    <a
                      href={`mailto:${email}`}
                      target="_blank"
                      rel="noreferrer"
                      className="duration-300 hover:underline lowercase"
                    >
                      {email}
                    </a>
                  </li>
                  <li className="text-md md:text-lg lg:text-xl  font-medium mb-2">
                    <a
                      href={`mailto:${support_email}`}
                      target="_blank"
                      rel="noreferrer"
                      className="duration-300 hover:underline lowercase"
                    >
                      {support_email}
                    </a>
                  </li>
                </ul>
                <Social
                  facebook={facebook}
                  whatsapp={whatsapp}
                  tiktok={tiktok}
                  instagram={instagram}
                  youtube={youtube}
                  x={x}
                  linkedin={linkedin}
                />
              </div>
            </div>
          </div>
          {copyRight && <CopyRight copyRight={copyRight} />}
          <div className="mt-4 md:mt-5 lg:mt-6 xl:mt-7 w-full flex lg:justify-center text-white pt-4 border-t border-t-white">
            <p>
              Designed and Developed by{" "}
              <a
                href="https://qutell.com/"
                target="_blank"
                rel="noreferrer"
                className="font-bold underline"
              >
                Qutell Technology
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
