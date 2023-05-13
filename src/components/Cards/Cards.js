
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import MyHero from "../Hero/Hero";
import HeroImg from './../../assets/night.jpg'

const { default: CardComponent } = require("./CardComponent");

function Cards() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        if (!(cards.length)) {
            axios
                .get("http://localhost:3000/products", {
                    headers: {
                        authorization: localStorage.getItem("accessToken"),
                    },
                })
                .then((res) => setCards(res.data));
        }
    }, []);
    

    return (
        <>
        <div className="ProductCard">
        <MyHero 
        
        heroImg={HeroImg}
        title="Products"
        buttonText = "Add New Product"
        url="add-product"


        /> 
        </div>
        <div className="cardd">
            <div className="roww">
                {cards.map((card) => {
                    return (
                        <div className="thecard">
                            < CardComponent  data={card} />
                        </div>
                    );
                })}
            </div>
        </div>
        </>
    );
}

export default Cards;