const PersonDetails = ({ data, contactPressed }) => {
    return (
        <div>
            <img src={data.results[0].picture.large} alt="" className="person-pic"></img>

            <h3 className="person-name">{data.results[0].name.first + " " + data.results[0].name.last}</h3>

            {!contactPressed && <div className="contact-info-container"><div className="contact-info">
                <p className="font-changa">{data.results[0].email}</p>
                <p className="font-changa">{data.results[0].cell}</p>
            </div> </div>}
        </div>

    )
}

export default PersonDetails;