import { useQuery } from "@tanstack/react-query";
import { Axios } from "../../../services/api/Axios";
const useDownloadPdf = (selectedId: string | number | null) => {
  return useQuery({
    queryKey: ["download-pdf", selectedId],
    queryFn: async ({ queryKey }) => {
      const [, id] = queryKey;
      if (!id) return null;

      // مهم جدًا: تحديد نوع الاستجابة
      const response = await Axios.get(`financial_menus/download/${id}`, {
        responseType: "blob",
      });

      return response.data;
    },
    enabled: false,
  });
};

export default useDownloadPdf;
