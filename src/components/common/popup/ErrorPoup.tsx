interface ErrorPopupProps {
    title?: string;
    subTitle?: string;
  }
  import { MdOutlineError } from "react-icons/md";
  const ErrorPopup: React.FC<ErrorPopupProps> = ({ title, subTitle }) => {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-full h-full container mx-auto px-8 md:px-16 lg:px-24">
          <div className="w-full h-full lg:w-[500px] py-3 px-5 rounded-md shadow-mainShadow mx-auto mt-10 md:mt-12 lg:mt-20">
            <div className="flex flex-col items-center justify-center gap-3">
              <MdOutlineError size={50} className="text-red-700" />
              {title && (
                <h1 className="text-xl font-bold text-red-700">{title}</h1>
              )}
              {subTitle && (
                <p className="text-textColor text-center">{subTitle}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ErrorPopup;
  