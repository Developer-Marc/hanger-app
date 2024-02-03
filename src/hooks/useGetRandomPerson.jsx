import { useQuery } from 'react-query';
import { fetchRandomPersonData } from '../services/fetchRandomPersonData';

export const useGetRandomPerson = (filter) => {

    return useQuery({
        queryKey: ["person"],
        queryFn: () => fetchRandomPersonData(filter),
        refetchOnWindowFocus: false,

    })
}
