import { useNavigate } from "react-router-dom";
interface logoProps {
  logo?: string;
}
const Logo: React.FC<logoProps> = ({ logo }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <img
      alt="logo"
      src={logo}
      className="h-auto cursor-pointer"
      onClick={handleClick}
      loading="eager"
      width={140}
    />
  );
};

export default Logo;
