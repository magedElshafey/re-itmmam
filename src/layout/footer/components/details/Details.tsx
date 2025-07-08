import locationIcom from "../../../../assets/location.webp";
import emailIcon from "../../../../assets/email.webp";
import { useTranslation } from "react-i18next";
interface DetailsProps {
  location?: string;
  email?: string;
}
const Details: React.FC<DetailsProps> = ({ location, email }) => {
  const { i18n } = useTranslation();
  return (
    <>
      {location ? (
        <div className="flex items-center  gap-2 mb-3">
          <img
            alt="icon"
            src={locationIcom}
            className="w-[15px] h-[15px] object-contain"
          />
          <a
            target="_blank"
            rel="noreferrer noopener"
            href={location}
            className={`text-white lowercase duration-300 hover:underline ${
              i18n.language === "ar" ? "text-base md:text-md lg:text-lg" : ""
            }`}
          >
            {location}
          </a>
        </div>
      ) : null}
      {email ? (
        <div className="flex items-center  gap-2 mb-5">
          <img
            alt="icon"
            src={emailIcon}
            className="w-[15px] h-[15px] object-contain"
          />
          <a
            href={`mailto:${email}`}
            target="_blank"
            rel="noreferrer"
            className={`lowercase text-white duration-300 hover:underline ${
              i18n.language === "ar" ? "text-base md:text-md lg:text-lg" : ""
            }`}
          >
            {email}
          </a>
        </div>
      ) : null}
    </>
  );
};

export default Details;
