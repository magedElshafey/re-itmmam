import { useTranslation } from "react-i18next";

interface ContactInputProps {
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  id?: string;
  className?: string;
  autoComplete?: string;
}

const ContactInput: React.FC<ContactInputProps> = ({
  placeholder,
  type = "text",
  value,
  onChange,
  onBlur,
  onFocus,
  error,
  disabled = false,
  required = false,
  name,
  id,
  className = "",
  autoComplete,
}) => {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder={placeholder ? t(placeholder) : ""}
        disabled={disabled}
        required={required}
        autoComplete={autoComplete}
        className={`
          bg-white 
          border 
          border-gray-300 
          outline-none 
          rounded-2xl 
          py-3 
          px-5 
          w-full 
          transition-all 
          duration-200
          focus:border-blue-500 
          focus:ring-2 
          focus:ring-blue-200
          disabled:bg-gray-100 
          disabled:cursor-not-allowed
          ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''}
          ${className}
        `.trim()}
      />
      {error && (
        <p className="text-red-500 text-xs mt-1 ml-1">{error}</p>
      )}
    </div>
  );
};

export default ContactInput;
