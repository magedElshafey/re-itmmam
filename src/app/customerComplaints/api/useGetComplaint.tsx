import { Axios } from "../../../services/api/Axios";
import { useQuery } from "@tanstack/react-query";
import { complaints } from "../../../services/api/config";
const useGetComplaint = () => {
  return useQuery({
    queryKey: ["publication"],
    queryFn: async () => {
      const { data } = await Axios.get(complaints);
      return data?.data;
    },
  });
};
export default useGetComplaint;
