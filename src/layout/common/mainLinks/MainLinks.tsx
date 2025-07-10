import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Nav } from "../../../types/Nav";
import { navLinks } from "../../../data/data";

interface MainLinksProps {
  scrolling?: boolean;
  setShowSidebar?: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainLinks: React.FC<MainLinksProps> = ({ scrolling, setShowSidebar }) => {
  const { t, i18n } = useTranslation();
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, item?: Nav) => {
    if(item && item.list) { 
      e.preventDefault();
    }
    if (setShowSidebar) {
      setShowSidebar(false);
    } else {
      return;
    }
  };

  const handleMouseEnter = (id: number) => {
    setHoveredItem(id);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <>
      {navLinks && navLinks?.length
        ? navLinks?.map((item: Nav, index: number) => (
            <li 
              key={index}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink
                onClick={(e) => handleClick(e, item)}
                to={item?.link}
                className={`duration-300 ${
                  scrolling
                    ? "text-black hover:text-mainColor"
                    : "text-white hover:text-babyBlueColor"
                }  hover:underline  flex items-center gap-2 ${
                  i18n.language === "ar"
                    ? "text-base md:text-md  xl:text-xl"
                    : "text-base"
                }  `}
              >
                <span> {t(item.name)}</span>
                {item.list && item.list.length > 0 && (
                  <svg 
                    className="w-4 h-4 transition-transform duration-200"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M19 9l-7 7-7-7" 
                    />
                  </svg>
                )}
              </NavLink>
              
              {/* Dropdown Menu */}
              {item.list && item.list.length > 0 && (
                <div className="group-hover:block hidden absolute top-[90%] left-0 mt-1 bg-white shadow-lg rounded-md py-2 min-w-48 z-50 border border-gray-200">
                  {item.list.map((subItem: Nav, subIndex: number) => (
                    <NavLink
                      key={subIndex}
                      onClick={handleClick}
                      to={subItem.link}
                      className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-mainColor transition-colors duration-200 ${
                        i18n.language === "ar" ? "text-right" : "text-left"
                      }`}
                    >
                      {t(subItem.name)}
                    </NavLink>
                  ))}
                </div>
              )}
            </li>
          ))
        : null}
    </>
  );
};

export default MainLinks;
