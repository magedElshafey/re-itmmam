import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
interface CallToActionProps {
  scrolling?: boolean;
  showSidebar?: boolean;
  setShowSidebar?: React.Dispatch<React.SetStateAction<boolean>>;
}
const CallToAction: React.FC<CallToActionProps> = ({
  scrolling,
  showSidebar,
  setShowSidebar,
}) => {
  const { t, i18n } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const toggleShowModal = () => {
    setShowModal(!showModal);
  };
  const handleClick = () => {
    if (showSidebar && setShowSidebar) {
      setShowSidebar(false);
    } else {
      return;
    }
  };
  return (
    <button
      onClick={toggleShowModal}
      className={` relative min-w-[120px] ${
        scrolling ? " bg-darkMainColor text-white" : "bg-white"
      } px-4 py-2 text-nowrap  rounded-3xl flex items-center justify-center gap-2 duration-300 hover:bg-babyBlueColor ${
        i18n.language === "ar" ? "text-base lg:text-md xl:text-lg" : ""
      }`}
    >
      <p>{t("ask for consultation")}</p>
      <IoIosArrowDown />
      <ul
        className={`absolute top-full left-0 min-w-full bg-white p-3 rounded-md z-40 shadow-md text-start text-black ${
          showModal ? "block" : "hidden"
        }`}
      >
        <li
          onClick={() => {
            handleClick();
            setShowModal(false);
          }}
          className="mb-3"
        >
          <Link to="/contact">{t("contact us")}</Link>
        </li>
        <li
          onClick={() => {
            handleClick();
            setShowModal(false);
          }}
          className="mb-3"
        >
          <Link to="/customer-complaints">{t("Customer complaints")}</Link>
        </li>
      </ul>
    </button>
  );
};

export default CallToAction;
