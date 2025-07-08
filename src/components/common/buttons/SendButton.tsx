import trueIcon from "../../../assets/true.webp";
import { useTranslation } from "react-i18next";
interface SendButtonProps {
  disabled?: boolean;
}
const SendButton: React.FC<SendButtonProps> = ({ disabled }) => {
  const { t , i18n } = useTranslation();
  return (
    <button
      disabled={disabled}
      type="submit"
      className={`flex items-center justify-center gap-1 bg-darkMainColor text-white py-2 px-6 rounded-lg ${
        disabled ? "bg-opacity-40" : ""
      } ${i18n.language === "ar" ? "text-md md:text-lg lg:text-xl" : ""}`}
    >
      <span>{t("send")}</span>
      <img alt="icon" src={trueIcon} className="w-7 h-7 object-contain" />
    </button>
  );
};

export default SendButton;
