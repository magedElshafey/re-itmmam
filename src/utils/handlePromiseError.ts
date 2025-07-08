import { AxiosError } from "axios";
import { toast } from "react-toastify";

const handlePromisError = (error: unknown) => {
  if (error instanceof AxiosError && error.response) {
    toast.error(error.response.data?.message || "خطأ غير متوقع من السيرفر");
  } else {
    toast.error("حدث خطأ غير متوقع");
  }
};

export default handlePromisError;
