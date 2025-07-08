import { Axios } from "../../../services/api/Axios";
import { useQuery } from "@tanstack/react-query";
import { lists } from "../../../services/api/config";
import { List } from "../../../types/List";
const useLists = () => {
  return useQuery({
    queryKey: ["lists"],
    queryFn: async () => {
      const { data } = await Axios.get(lists);
      return data?.data as List[];
    },
  });
};

export default useLists;
