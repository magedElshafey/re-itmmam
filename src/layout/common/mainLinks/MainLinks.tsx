import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Nav } from "../../../types/Nav";
import { navLinks } from "../../../data/data";
interface MainLinksProps {
  scrolling?: boolean;
  setShowSidebar?: React.Dispatch<React.SetStateAction<boolean>>;
}
const MainLinks: React.FC<MainLinksProps> = ({ scrolling, setShowSidebar }) => {
  const { t, i18n } = useTranslation();
  const handleClick = () => {
    if (setShowSidebar) {
      setShowSidebar(false);
    } else {
      return;
    }
  };
  return (
    <>
      {navLinks && navLinks?.length
        ? navLinks?.map((item: Nav, index: number) => (
            <li key={index}>
              <NavLink
                onClick={handleClick}
                to={item?.link}
                className={`duration-300 ${
                  scrolling
                    ? "text-black hover:text-mainColor"
                    : "text-white hover:text-babyBlueColor"
                }  hover:underline  flex items-center gap-3 ${
                  i18n.language === "ar"
                    ? "  text-base md:text-md  xl:text-xl"
                    : " text-base"
                }  `}
              >
                <span> {t(item.name)}</span>
              </NavLink>
            </li>
          ))
        : null}
    </>
  );
};

export default MainLinks;
