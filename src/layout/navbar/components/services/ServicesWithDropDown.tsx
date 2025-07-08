import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ServiceWithChild } from "../../../../types/ServiceWithChild";
import createSlug from "../../../../utils/createSlug";
import { IoIosArrowDown } from "react-icons/io";
interface ServicesLinksProps {
  services?: ServiceWithChild[];
  setActiveDropDown: React.Dispatch<React.SetStateAction<number | null>>;
  scrolling: boolean;
  activeDropDown: number | null;
}
const ServicesWithDropDown: React.FC<ServicesLinksProps> = ({
  services,
  setActiveDropDown,
  scrolling,
  activeDropDown,
}) => {
  const { t, i18n } = useTranslation();
  return (
    <>
      {services && services?.length
        ? services?.map((item: ServiceWithChild, index: number) => (
            <li key={index}>
              <NavLink
                onMouseEnter={() => setActiveDropDown(index)}
                onMouseLeave={() => setActiveDropDown(null)}
                to={`/services/${item?.id}/${createSlug(item?.name)}`}
                state={{
                  serviceId: item?.id,
                }}
                className={`duration-300 ${
                  scrolling
                    ? "text-black hover:text-mainColor"
                    : "text-white hover:text-babyBlueColor"
                }  hover:underline  flex items-center gap-1 relative group ${
                  i18n.language === "ar"
                    ? "text-base md:text-md  xl:text-xl"
                    : "text-base"
                } `}
              >
                <span> {item.name}</span>
                {item?.child_services && item?.child_services?.length ? (
                  <>
                    <IoIosArrowDown size={15} />
                    <ul
                      className={`absolute top-full right-0 bg-white py-3 px-6 shadow-md transition-opacity duration-100 min-w-full rounded-lg text-start ${
                        activeDropDown === index
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      }`}
                    >
                      {item?.child_services?.map(
                        (subItem: ServiceWithChild, subIndex: number) => (
                          <li key={subIndex}>
                            <NavLink
                              className="block mb-3 text-mainColor duration-300 hover:underline hover:translate-x-4 w-fit"
                              to={`/services/${createSlug(subItem?.name)}`}
                              state={{
                                serviceId: subItem?.id,
                              }}
                              onClick={() => setActiveDropDown(null)}
                            >
                              {t(subItem?.name)}
                            </NavLink>
                          </li>
                        )
                      )}
                    </ul>
                  </>
                ) : null}
              </NavLink>
            </li>
          ))
        : null}
    </>
  );
};

export default ServicesWithDropDown;
