import { Axios } from "../../../services/api/Axios";
import { useQuery } from "@tanstack/react-query";
import { executive_management } from "../../../services/api/config";
const useExecutiveManagment = () => {
  return useQuery({
    queryKey: ["executive_management"],
    queryFn: async () => {
      const { data } = await Axios.get(executive_management);
      return data?.data;
    },
  });
};

export default useExecutiveManagment;
