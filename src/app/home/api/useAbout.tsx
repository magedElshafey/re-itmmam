import { useQuery } from "@tanstack/react-query";
import { Axios } from "../../../services/api/Axios";
import { about } from "../../../services/api/config";
import { About } from "../../../types/About";
const useAbout = () => {
  return useQuery({
    queryKey: ["about-us"],
    queryFn: async () => {
      const { data } = await Axios.get(about);
      return data?.data as About[];
    },
  });
};
export default useAbout;
