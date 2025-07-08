import { useState, useEffect } from "react";
import { useLanguage } from "../../../store/LanguageProvider";
import { useClickOutside } from "../../../hooks/common/ui/useClickOutside";
const useNavbarLogic = () => {
  // states
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [activeDropDown, setActiveDropDown] = useState<number | null>(null);
  const [scrolling, setScrolling] = useState<boolean>(false);
  const { language, changeLanguage } = useLanguage();
  const handleCloseSidebar = () => {
    setShowSidebar(false);
  };
  // refs
  const sidebarRef = useClickOutside<HTMLDivElement>({
    onClickOutside: handleCloseSidebar,
  });
  // handlers
  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const changeLanguageHandler = (language: string) => {
    changeLanguage(language);
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return {
    states: {
      showSidebar,
      activeDropDown,
      scrolling,
      language,
    },
    refs: { sidebarRef },
    handlers: {
      setShowSidebar,
      setActiveDropDown,
      handleShowSidebar,
      changeLanguageHandler,
    },
  };
};
export default useNavbarLogic;
