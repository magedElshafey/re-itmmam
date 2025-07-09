import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
interface SocialProps {
  facebook?: string;
  instagram?: string;
  youtube?: string;
  tiktok?: string;
  whatsapp?: string;
  x?: string;
}

const Social: React.FC<SocialProps> = ({
  facebook,
  instagram,
  youtube,
  tiktok,
  whatsapp,
  x,
}) => {
  return (
    <ul className="flex items-center gap-4 flex-wrap text-babyBlueColor">
      {facebook && (
        <li>
          <a
            href={facebook}
            target="_blank"
            rel="noreferrer"
            className=" duration-300 hover:text-white hover:scale-110"
          >
            <FaFacebook size={30} />
          </a>
        </li>
      )}
      {instagram && (
        <li>
          <a
            href={instagram}
            target="_blank"
            rel="noreferrer"
            className=" duration-300 hover:text-white hover:scale-110"
          >
            <FaInstagram size={30} />
          </a>
        </li>
      )}
      {youtube && (
        <li>
          <a
            href={youtube}
            target="_blank"
            rel="noreferrer"
            className=" duration-300 hover:text-white hover:scale-110"
          >
            <FaYoutube size={30} />
          </a>
        </li>
      )}
      {tiktok && (
        <li>
          <a
            href={tiktok}
            target="_blank"
            rel="noreferrer"
            className=" duration-300 hover:text-white hover:scale-110"
          >
            <FaTiktok size={30} />
          </a>
        </li>
      )}
      {whatsapp && (
        <li>
          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className=" duration-300 hover:text-white hover:scale-110"
          >
            <FaWhatsapp size={30} />
          </a>
        </li>
      )}
      {x && (
        <li>
          <a
            href={x}
            target="_blank"
            rel="noreferrer"
            className=" duration-300 hover:text-white hover:scale-110"
          >
            <FaXTwitter size={30} />
          </a>
        </li>
      )}
    </ul>
  );
};

export default Social;
