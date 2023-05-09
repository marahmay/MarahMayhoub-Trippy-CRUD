import MyDestination from "../Destination/Destination";
import MyHero from "../Hero/Hero";
import MyTrips from "../Trips/Trips";
import HeroImg from './../../assets/12.jpg'

const Home = () =>{
    return(
        <>
        <MyHero 
        heroImg = {HeroImg}
        title="Your Journey Your Story"
        text ="Choose Your Favourite Destination"
        buttonText = "Travel Now"
        url = "/"  
        />
        <MyDestination />
        <MyTrips />
        </>
    );
}

export default Home;