import { useLocation } from "react-router-dom";
import { getServiceById } from "../../../../services/api/config";
import { Axios } from "../../../../services/api/Axios";
import { useQuery } from "@tanstack/react-query";
const useServiceById = () => {
  const serviceId = useLocation()?.state?.serviceId;
  return useQuery({
    queryKey: ["service-details", serviceId],
    queryFn: async () => {
      const { data } = await Axios.get(`${getServiceById}/${serviceId}`);
      return data?.data;
    },
    enabled: !!serviceId,
  });
};
export default useServiceById;
