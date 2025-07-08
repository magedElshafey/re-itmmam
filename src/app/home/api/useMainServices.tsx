import { useQuery } from "@tanstack/react-query";
import { Axios } from "../../../services/api/Axios";
import { MainServices } from "../../../types/MainServices";
import { mainServices } from "../../../services/api/config";
const useMainServices = () => {
  return useQuery({
    queryKey: ["mainServices"],
    queryFn: async () => {
      const { data } = await Axios.get(mainServices);
      return data?.data as MainServices[];
    },
  });
};
export default useMainServices;
