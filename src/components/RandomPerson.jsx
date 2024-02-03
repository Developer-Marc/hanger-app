import { useGetRandomPerson } from "../hooks/useGetRandomPerson";
import PersonDetails from "../details/PersonDetails";

const RandomPerson = ({newAction, setNewAction}) => {

    const { data, isFetching, refetch } = useGetRandomPerson()

    if(newAction) {
        setNewAction(false)
        refetch()
    }

    return (
        <div>
            {isFetching ?
                <h1>Loading...</h1>
                :
                <PersonDetails data={data} />
            }

            <button onClick={() => { refetch() }}>
                Find me the next Person
            </button>
        </div>
    )
};

export default RandomPerson;