import { useTranslation } from "react-i18next";
interface MainTextAreaProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  
}
const MainTextArea: React.FC<MainTextAreaProps> = ({ value, onChange }) => {
  const { t } = useTranslation();
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={t("message")}
      className="bg-white border border-1 outline-none rounded-3xl p-3 w-full h-[100px]"
    />
  );
};

export default MainTextArea;
