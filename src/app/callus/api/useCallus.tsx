import { Axios } from "../../../services/api/Axios";
import { useMutation } from "@tanstack/react-query";
import { contactUs } from "../../../services/api/config";
const useCallus = () => {
  return useMutation({
    mutationFn: async (v: FormData) => {
      const { data } = await Axios.post(contactUs, v);
      return data;
    },
  });
};
export default useCallus;
