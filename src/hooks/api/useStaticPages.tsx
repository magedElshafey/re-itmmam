import { Axios } from "../../services/api/Axios";
import { staticPages } from "../../services/api/config";
import { useQuery } from "@tanstack/react-query";
import { StaticPage } from "../../types/StaticPage";
const fetchData = async () => {
  const response = await Axios.get(staticPages);
  return response?.data?.data as StaticPage[]
};
const useStaticPages = (key : string) => {
  const { isLoading, data } = useQuery({
    queryKey: ["static pages"],
    queryFn: fetchData,
  });
    const pageData = data?.find((item : StaticPage) => item?.slug === key); 
    return {pageData , isLoading}
};
export default useStaticPages;
