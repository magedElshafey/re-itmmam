import { footerLinks } from "../../../../data/data";
import { Nav } from "../../../../types/Nav";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Coins from "../../../../components/common/coins/Coins";
const FooterLinks = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      {footerLinks?.map((item: Nav, index: number) => (
        <div key={index}>
          <h3 className="text-white text-lg md:text-xl lg:text-2xl xl:text-3xl  mb-4 md:mb-5">
            {t(item?.name)}
          </h3>
          {item?.list &&
            item?.list?.length &&
            item?.list?.map((subItem: Nav, subIndex: number) => (
              <Link
                key={subIndex}
                to={subItem?.link}
                className="flex items-center gap-2 mb-3 text-white w-fit duration-300 hover:text-babyBlueColor hover:underline group"
              >
                <Coins />
                <span
                  className={
                    i18n.language === "ar"
                      ? "text-base md:text-md lg:text-lg"
                      : ""
                  }
                >
                  {t(subItem?.name)}
                </span>
              </Link>
            ))}
        </div>
      ))}
    </>
  );
};

export default FooterLinks;
