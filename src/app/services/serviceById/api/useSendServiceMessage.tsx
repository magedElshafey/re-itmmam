import { Axios } from "../../../../services/api/Axios";
import { useMutation } from "@tanstack/react-query";
import { contactUs } from "../../../../services/api/config";
const useSendServiceMessage = () => {
  return useMutation({
    mutationFn: async (v: FormData) => {
      const { data } = await Axios.post(contactUs, v);
      return data;
    },
  });
};
export default useSendServiceMessage;
