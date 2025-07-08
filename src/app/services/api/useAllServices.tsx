import { Axios } from "../../../services/api/Axios";
import { services } from "../../../services/api/config";
import { useQuery } from "@tanstack/react-query";
import { ServiceWithChild } from "../../../types/ServiceWithChild";
const useAllServices = () => {
    return useQuery({
        queryKey: ['all-services'], 
        queryFn: async () => {
            const { data } = await Axios.get(services); 
            return data?.data as ServiceWithChild[]
        }
})
}; 
export default useAllServices