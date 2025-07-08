import { Axios } from "../../../services/api/Axios";
import { useQuery } from "@tanstack/react-query";
import { home_page, data_entries } from "../../../services/api/config";
const useHomePage = () => {
  return useQuery({
    queryKey: ["home-page"],
    queryFn: async () => {
      const { data } = await Axios.get(`${data_entries}/${home_page}`);
      return data?.data;
    },
  });
};

export default useHomePage;
