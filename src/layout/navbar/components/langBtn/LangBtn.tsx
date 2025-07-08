interface LangBtnProps {
  changeLanguageHandler: (lang: string) => void;
  language: string;
  scrolling: boolean;
}
const LangBtn: React.FC<LangBtnProps> = ({
  changeLanguageHandler,
  language,
  scrolling,
}) => {
  return (
    <button
      onClick={() => changeLanguageHandler(language === "ar" ? "en" : "ar")}
      className={`flex items-center uppercase gap-4 ${
        scrolling ? "text-darkMainColor" : "text-white"
      }`}
    >
      <span>|</span>
      <span>{language === "ar" ? "en" : "ar"}</span>
    </button>
  );
};

export default LangBtn;
