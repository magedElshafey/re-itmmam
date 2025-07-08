import { useTranslation } from "react-i18next";
interface MainInputProps {
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}
const MainInput: React.FC<MainInputProps> = ({
  type,
  value,
  onChange,
  placeholder,
  error,
}) => {
  const { t } = useTranslation();
  return (
    <div>
      <input
        className="bg-white border border-1 outline-none rounded-3xl py-3 px-5 w-full"
        value={value}
        type={type}
        onChange={onChange}
        placeholder={placeholder ? t(placeholder) : ""}
      />
      <p className="text-red-500 text-xs">{error}</p>
    </div>
  );
};

export default MainInput;
