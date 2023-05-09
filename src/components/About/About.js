import MyHero from "../Hero/Hero";
import HeroImg from './../../assets/night.jpg'
import './../About/AboutStyle.css'
import { AboutData } from "./AboutData";
const About = () => {
    return (

        <>
        <div className="aboutHero">
            <MyHero
                heroImg={HeroImg}
                title="About"

            />
        </div>

        <div className="AboutData">
            {
                AboutData.map((item,index)=>{
                    return(
                        <div className="AboutDataDetails">
                            <h1>{item.title}</h1>
                            <p>{item.text}</p>
                        </div>
                    );
                })
            }

        </div>

        </>
    );
}

export default About;