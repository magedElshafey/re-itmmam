import { FaWhatsapp } from "react-icons/fa";
import { FaArrowUpLong } from "react-icons/fa6";
import useFixedBtnLogic from "./logic/useFixedBtnLogic";
interface FixedBtnProps {
  whatsapp?: string;
}
const FixedBtn: React.FC<FixedBtnProps> = ({ whatsapp }) => {
  const {
    states: { showArrow },
    handlers: { handleScrollToTop },
  } = useFixedBtnLogic();
  return (
    <>
      <button
        onClick={handleScrollToTop}
        className={`fixed bottom-4  w-9 h-9 rounded-[50%] flex justify-center items-center bg-mainColor duration-300 text-white z-40 cursor-pointer ${
          showArrow ? "right-4" : "right-[-300%]"
        }`}
      >
        <FaArrowUpLong size={20} />
      </button>
      {whatsapp && (
        <a
          href={`https://wa.me/${whatsapp}`}
          className="fixed bottom-20 right-4 w-9 h-9 rounded-[50%] flex justify-center items-center bg-[#25d366] text-white z-40 cursor-pointer"
        >
          <FaWhatsapp size={20} />
        </a>
      )}
    </>
  );
};

export default FixedBtn;
