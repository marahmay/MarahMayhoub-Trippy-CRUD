import MyTripCard from "./TripCard";
import Trip1 from './../../assets/5.jpg'
import Trip2 from './../../assets/8.jpg'
import Trip3 from './../../assets/6.jpg'


const MyTrips = () => {
    return (
        <div className="trips">

            <h1>Recent Trips</h1>
            <p>You can descover unique destinations using Google Maps. </p>


            <div className="tripCards">

                <MyTripCard 
                
                cardImage = {Trip1}
                title = "Trip in Indonisia"
                text = "Lorem Ipsum is simply dummy text of the printing and typo electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desk."
                />
                <MyTripCard 
                
                cardImage = {Trip2}
                title = "Trip in Malaysia"
                text = "Lorem Ipsum is simply dummy text of the printing and typo electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desk."
                />
                <MyTripCard 
                
                cardImage = {Trip3}
                title = "Trip in France"
                text = "Lorem Ipsum is simply dummy text of the printing and typo electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desk."
                />
            </div>

        </div>
    );
}

export default MyTrips;