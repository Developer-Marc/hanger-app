import { useGetRandomActivity } from "../hooks/useGetRandomActivity";
import ActivityDetails from "../details/PersonDetails";

const RandomActivity = ({ newAction, setNewAction }) => {

    const { data, isFetching, refetch } = useGetRandomActivity()

    if (newAction) {
        setNewAction(false)
        refetch()
    }

    return (
        <div>
            {isFetching ?
                <h1>Loading...</h1>
                :
                <h1>{data.activity}</h1>
            }
        </div>
    )
};

export default RandomActivity;