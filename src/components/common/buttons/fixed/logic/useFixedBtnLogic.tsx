import { useState, useEffect } from "react";
const useFixedBtnLogic = () => {
  const [showArrow, setShowArrow] = useState(false);
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleShowArrow = () => {
    if (window.scrollY > 100) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleShowArrow);
    return () => {
      document.removeEventListener("scroll", handleShowArrow);
    };
  }, []);
    return {
        states: {showArrow}, 
        handlers : {handleScrollToTop}
    }
};
export default useFixedBtnLogic;
