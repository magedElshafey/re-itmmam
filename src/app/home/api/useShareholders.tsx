import { Axios } from "../../../services/api/Axios";
import { useQuery } from "@tanstack/react-query";
import { shareholders } from "../../../services/api/config";
const useShareholders = () => {
  return useQuery({
    queryKey: ["shareholders"],
    queryFn: async () => {
      const { data } = await Axios.get(shareholders);
      return data?.data;
    },
  });
};

export default useShareholders;
