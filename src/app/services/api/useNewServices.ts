import { useQuery } from "@tanstack/react-query";
import { Axios } from "../../../services/api/Axios";
import { Response } from "../../../types/Response";
import { Service } from "../types/services.types";

const detailTypes = ["range_service_footer", "itmam_invest", "range_service", "partner_with_invest", "sets_us_apart", "regulatory_mandate", "home_page", "why_choose_us"] as const;

type DetailType = (typeof detailTypes)[number];

const useNewServices = (type: DetailType) => {
    const query = useQuery({
        queryKey: ["services", "new", type],
        queryFn: async () => (await Axios.get<Response<Service[]>>(`data_entries/${type}`)).data.data,
    });

    return {
        query
    };
}

export default useNewServices;