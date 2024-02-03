import { useQuery } from 'react-query';
import { fetchRandomActivityData } from '../services/fetchRandomActivityData';

export const useGetRandomActivity = (filter) => {

    return useQuery({
        queryKey: ["activity"],
        queryFn: () => fetchRandomActivityData(filter),
        refetchOnWindowFocus: false,

    })
}
