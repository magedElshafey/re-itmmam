import { Axios } from "../../services/api/Axios";
import { useQuery } from "@tanstack/react-query";
import { ServiceWithChild } from "../../types/ServiceWithChild";
import { serviceWithChild } from "../../services/api/config";
const useServiceWithChild = () => {
  return useQuery({
    queryKey: ["service with child"],
    queryFn: async () => {
      const { data } = await Axios.get(serviceWithChild);
      return data?.data as ServiceWithChild[];
    },
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 2,
  });
};
export default useServiceWithChild;
