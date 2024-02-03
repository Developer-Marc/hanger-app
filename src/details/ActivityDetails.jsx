const ActivityDetails = ({ data, person }) => {
    return (
        <h2 className="activity-person amiri-bold">{data.activity.replace(/some friends|a friend|someone/g, person.results[0].name.first)}</h2>
    )
}

export default ActivityDetails;