
import './../Destination/DestinationStyle.css'
const MyDestinationData = (props) =>{
    return(

        <div className={props.cName}>
            <div className="des-text">
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
            <div className="desImg">
                <img src={props.img1} alt="img1"/>
                <img src={props.img2} alt="img2"/>
            </div>
        </div>
    );
}

export default MyDestinationData;