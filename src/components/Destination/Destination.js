import './../Destination/DestinationStyle.css'
import MyDestinationData from "./DestinationData";
import Mountain1 from './../../assets/1.jpg'
import Mountain2 from './../../assets/2.jpg'
import Mountain3 from './../../assets/5.jpg'
import Mountain4 from './../../assets/8.jpg'

const MyDestination = () => {
    return (
        <div className="destination" >

            <h1>Popular Destinations</h1>
            <p>Tours dive you the opportunity to see a lot, within a time frame. </p>


            <MyDestinationData
                cName="des-data"
                title="Mt. Daguldul, Batangas"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                img1={Mountain3}
                img2={Mountain4}
            >
            </MyDestinationData>
            <MyDestinationData
                cName="des-data-reverse"
                title="Taal Volcano, Batangas"
                text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                img1={Mountain1}
                img2={Mountain2}
            >
            </MyDestinationData>

        </div>
    );
}

export default MyDestination;