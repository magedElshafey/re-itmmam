import { useMutation } from "@tanstack/react-query";
import { Axios } from "../../../services/api/Axios";
import { useTranslation } from "react-i18next";

const useDownloadPdf = () => {
  const { i18n } = useTranslation();

  return useMutation({
    mutationFn: async (id: string | number) => {
      const response = await Axios.get(
        `financial_menus/download/${id}?lang=${i18n.language}`,
        {
          responseType: "blob",
        }
      );
      return response.data;
    },
  });
};

export default useDownloadPdf;
