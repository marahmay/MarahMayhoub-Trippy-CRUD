

import MyHero from '../Hero/Hero';
import MyTrips from '../Trips/Trips';
import HeroImg from './../../assets/3.jpg';
import './../Service/ServiceStyle.css'

const Service = () => {

    return (
        <div>
            <div className="serviceHero">
            <MyHero
                heroImg={HeroImg}
                title = "Services"
            />
            </div>


            <MyTrips />
        </div>
    );
}

export default Service;