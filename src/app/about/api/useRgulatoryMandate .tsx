import { Axios } from "../../../services/api/Axios";
import { useQuery } from "@tanstack/react-query";
import { regulatory_mandate, data_entries } from "../../../services/api/config";
const useRgulatoryMandate = () => {
  return useQuery({
    queryKey: ["regulatory_mandate "],
    queryFn: async () => {
      const { data } = await Axios.get(`${data_entries}/${regulatory_mandate}`);
      return data?.data;
    },
  });
};

export default useRgulatoryMandate;
