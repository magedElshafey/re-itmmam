import { IoMdMenu } from "react-icons/io";
interface SidebarBtnProps {
    handleShowSidebar: () => void, 
    scrolling : boolean
}
const SidebarBtn : React.FC<SidebarBtnProps> = ({scrolling , handleShowSidebar}) => {
  return (
    <button onClick={handleShowSidebar}>
    <IoMdMenu
      className={`lg:hidden ${
        scrolling ? "text-darkMainColor" : "text-white"
      }`}
      size={30}
    />
  </button>
  )
}

export default SidebarBtn