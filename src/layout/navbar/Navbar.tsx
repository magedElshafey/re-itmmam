// hooks
import useNavbarLogic from "./logic/useNavbarLogic";
// components
import Logo from "../../components/common/logo/Logo";
import Sidebar from "../sidebar/Sidebar";
// import CallToAction from "../callToAction/CallToAction";
import MainLinks from "../common/mainLinks/MainLinks";
import SidebarBtn from "./components/sidebarBtn/SidebarBtn";
// import LangBtn from "./components/langBtn/LangBtn";

interface NavbarProps {
  facebook?: string;
  instagram?: string;
  youtube?: string;
  tiktok?: string;
  whatsapp?: string;
  x?: string;
  whiteLogo: string;
  darkLogo: string;
}
const Navbar: React.FC<NavbarProps> = ({
  facebook,
  instagram,
  youtube,
  tiktok,
  whatsapp,
  x,
  whiteLogo,
  darkLogo,
}) => {
  const {
    states: { showSidebar, scrolling },
    refs: { sidebarRef },
    handlers: { setShowSidebar, handleShowSidebar },
  } = useNavbarLogic();
  return (
    <>
      <div
        className={`fixed top-0 left-0 w-screen py-4 flex items-center z-40 transition-all duration-300 ${
          scrolling ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4  text-nowrap">
          <div className="w-full  flex items-center justify-between gap-4">
            <Logo logo={scrolling ? darkLogo : whiteLogo} />
            <ul className="hidden  lg:flex items-center gap-3">
              <MainLinks scrolling={scrolling} />
            </ul>
            <SidebarBtn
              scrolling={scrolling}
              handleShowSidebar={handleShowSidebar}
            />
            {/* <div className="hidden lg:block">
                <CallToAction scrolling={scrolling} />
              </div> */}

            {/* <LangBtn
                changeLanguageHandler={changeLanguageHandler}
                language={language}
                scrolling={scrolling}
              /> */}
          </div>
        </div>
      </div>
      <Sidebar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        sidebarRef={sidebarRef}
        facebook={facebook}
        instagram={instagram}
        youtube={youtube}
        tiktok={tiktok}
        whatsapp={whatsapp}
        x={x}
      />
    </>
  );
};

export default Navbar;
