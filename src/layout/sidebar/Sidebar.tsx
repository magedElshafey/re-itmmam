import { IoCloseSharp } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import CallToAction from "../callToAction/CallToAction";
import Social from "../../components/common/social/Social";
import { ServiceWithChild } from "../../types/ServiceWithChild";
import MainLinks from "../common/mainLinks/MainLinks";
import ServicesLinks from "../common/services/ServicesLinks";
interface SidebarProps {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  sidebarRef: React.RefObject<HTMLDivElement>;
  facebook?: string;
  instagram?: string;
  youtube?: string;
  tiktok?: string;
  whatsapp?: string;
  x?: string;
  services?: ServiceWithChild[];
}
const Sidebar: React.FC<SidebarProps> = ({
  showSidebar,
  setShowSidebar,
  sidebarRef,
  facebook,
  instagram,
  youtube,
  tiktok,
  whatsapp,
  x,
  services,
}) => {
  const { t } = useTranslation();
  return (
    <div
      ref={sidebarRef}
      className={`w-[90%] min-
        h-screen overflow-y-scroll py-3 px-6 bg-custom-gradient duration-300 fixed top-0 z-[1000] lg:hidden ${
        showSidebar ? "left-0" : "left-[-400%]"
      }`}
    >
      <div>
        <button onClick={() => setShowSidebar(false)}>
          <IoCloseSharp className="text-2xl text-white mb-5" />
        </button>
      </div>
      <ul>
        <MainLinks setShowSidebar={setShowSidebar} />
       <ServicesLinks services={services} setShowSidebar={setShowSidebar} /> 
      </ul>
      <div className="my-5">
        <CallToAction
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />
      </div>
      <div className="mt-5">
        <h5 className="text-white mb-2">{t("follow us")} :</h5>
        <Social
          facebook={facebook}
          whatsapp={whatsapp}
          tiktok={tiktok}
          instagram={instagram}
          youtube={youtube}
          x={x}
        />
      </div>
    </div>
  );
};

export default Sidebar;
