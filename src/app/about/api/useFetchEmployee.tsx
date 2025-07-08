import { Axios } from "../../../services/api/Axios";
import { employees } from "../../../services/api/config";
import { useQuery } from "@tanstack/react-query";
const useFetchEmployee = () => {
  return useQuery({
    queryKey: ["employee"],
    queryFn: async () => {
      const { data } = await Axios.get(employees);
      return data?.data;
    },
  });
};
export default useFetchEmployee;
