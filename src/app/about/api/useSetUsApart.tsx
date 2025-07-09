import { Axios } from "../../../services/api/Axios";
import { useQuery } from "@tanstack/react-query";
import { sets_us_apart, data_entries } from "../../../services/api/config";
const useSetUsApart = () => {
  return useQuery({
    queryKey: ["set-us-apart"],
    queryFn: async () => {
      const { data } = await Axios.get(`${data_entries}/${sets_us_apart}`);
      return data?.data;
    },
  });
};

export default useSetUsApart;
