import { useQuery } from "@tanstack/react-query";
import { Axios } from "../../../services/api/Axios";
import { heroHome } from "../../../services/api/config";
import { HeroHome } from "../../../types/HeroHome";
const useHeroSection = () => {
  return useQuery({
    queryKey: ["hero-home-section"],
    queryFn: async () => {
      const { data } = await Axios.get(heroHome);
      return data?.data as HeroHome;
    },
    staleTime: 0,
    refetchOnMount: "always",
  });
};
export default useHeroSection;
