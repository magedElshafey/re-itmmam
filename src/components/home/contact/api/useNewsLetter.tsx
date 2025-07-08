import { Axios } from "../../../../services/api/Axios"
import { useMutation } from "@tanstack/react-query"
import {newsLetters} from "../../../../services/api/config"
const useNewsLetter = () => {
    return useMutation({
         mutationFn: async (v: FormData) => {
              const { data } = await Axios.post(newsLetters, v);
              return data;
            },
    })
 } 
export default useNewsLetter