import { useState } from "react";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import useCallus from "../api/useCallus";
import handlePromisError from "../../../utils/handlePromiseError";
const useCallusLogic = () => {
  const { isPending, mutateAsync } = useCallus();
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleMessageChnage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() && !phone.trim() && !email.trim() && !message.trim()) {
      toast.error(t("all fields are required"));
      return;
    } else if (!name.trim()) {
      toast.error(t("name field is required"));
      return;
    } else if (!phone.trim()) {
      toast.error(t("phone field is required"));
      return;
    } else if (!email.trim()) {
      toast.error(t("email field is required"));
      return;
    } else if (!message.trim()) {
      toast.error(t("message field is required"));
      return;
    } else {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("message", message);
      try {
        const response = await mutateAsync(formData);
        if (response?.status) {
          toast.success(response?.message);
          setName("");
          setPhone("");
          setEmail("");
          setMessage("");
        }
      } catch (error) {
        handlePromisError(error);
      }
    }
  };
  return {
    states: {
      name,
      phone,
      email,
      message,
    },
    handlers: {
      handleNameChange,
      handlePhoneChange,
      handleEmailChange,
      handleMessageChnage,
      handleSubmit,
    },
    isPending,
  };
};
export default useCallusLogic;
