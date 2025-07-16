import { Axios } from "../../../services/api/Axios";
import { useQuery } from "@tanstack/react-query";
import { publications } from "../../../services/api/config";
const useGetPublication = () => {
  return useQuery({
    queryKey: ["publication"],
    queryFn: async () => {
      const { data } = await Axios.get(publications);
      return data?.data;
    },
  });
};
export default useGetPublication;
