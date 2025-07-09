import { Axios } from "../../../services/api/Axios";
import { useQuery } from "@tanstack/react-query";
import {
  partner_with_invest,
  data_entries,
} from "../../../services/api/config";
const usePartnetWithInvest = () => {
  return useQuery({
    queryKey: ["partner-with-invest"],
    queryFn: async () => {
      const { data } = await Axios.get(
        `${data_entries}/${partner_with_invest}`
      );
      return data?.data;
    },
  });
};

export default usePartnetWithInvest;
