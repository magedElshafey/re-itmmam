import { Axios } from "../../services/api/Axios";
import { Settings } from "../../types/Settings";
import { useQuery } from "@tanstack/react-query";
import { settings } from "../../services/api/config";
const useSettings = () => {
  return useQuery({
    queryKey: ["website-settings"],
    queryFn: async () => {
      const { data } = await Axios.get(settings);
      return data?.data as Settings;
    },
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 2,
  });
};
export default useSettings;
