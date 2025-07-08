import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const CallUsBtn = () => {
  const { t } = useTranslation();
  return (
    <Link
      to="/call-us"
      className="bg-white text-darkMainColor flex items-center justify-center py-2 px-6 duration-300 hover:bg-babyBlueColor hover:text-white rounded-xl w-fit mb-4"
    >
      {t("call us")}
    </Link>
  );
};

export default CallUsBtn;
