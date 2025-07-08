import { Axios } from "../../../services/api/Axios";
import { useQuery } from "@tanstack/react-query";
import { whyUs, data_entries } from "../../../services/api/config";
const useWhyUs = () => {
  return useQuery({
    queryKey: ["why-us"],
    queryFn: async () => {
      const { data } = await Axios.get(`${data_entries}/${whyUs}`);
      return data?.data;
    },
  });
};

export default useWhyUs;
