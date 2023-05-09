import './../Trips/TripsStyle.css'


const MyTripCard = (props) => {
    return (

        <div className="tripCard">
            <div className="cardImage">
                <img src={props.cardImage} alt="CardImage" />
            </div>
            <h4>{props.title}</h4>
            <p>{props.text}</p>
        </div>
    );
}

export default MyTripCard;