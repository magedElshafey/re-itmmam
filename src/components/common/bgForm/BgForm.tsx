import bg from "../../../assets/contactImg-min.webp";
interface BgFormProps {
  children: React.ReactNode;
}
const BgForm: React.FC<BgFormProps> = ({ children }) => {
  return (
    <div
      className={`w-full py-4 flex justify-center items-center min-h-[500px]`}
      style={{
        backgroundImage: `url( ${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24 ">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default BgForm;
