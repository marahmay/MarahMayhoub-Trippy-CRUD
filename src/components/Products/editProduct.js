// import { useParams } from "react-router-dom";
import React, { useState } from "react";
import MyHero from "../Hero/Hero";
import HeroImg from './../../assets/2.jpg'
import axios from "axios";
import {  useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import { useEffect } from "react";



const EditProduct = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [pro, setPro] = useState("");
    const navigate = useNavigate();

    const { id } = useParams();


    const updateDetails = (event) => {

        event.preventDefault();
        axios
            .put(
                `http://localhost:3000/products/${id}`,
                {
                    name: title,
                    description: description,
                },
                {
                    headers: {
                        Authorization: localStorage.getItem("accessToken"),
                    },
                }
            ).then((res) => {
                if (res.status === 200) {
                    navigate("/cards");
                }
            });

    }

    React.useEffect(() => {
        axios.get(`http://localhost:3000/products?id=${id}`, {
            headers: {
                authorization: localStorage.getItem("accessToken"),
            },
        }).then((response) => {
            setPro(response.data[id]);
        });
    }, []);

    console.log(pro.id);

    return (
        <>

            <div className="SignUpHero">
                <MyHero
                    heroImg={HeroImg}
                    title="Edit Product Details"
                />
            </div>


            <div className="MyForm">
                <h1>Edit Form</h1>

                <form onSubmit={updateDetails} >
                    <input onChange={(event) => setTitle(event.target.value)}  className='title' type="text" placeholder={pro.name} />
                    <input  onChange={(event) => setDescription(event.target.value)} className='des' type="text" placeholder={pro.description} />
                    <input className="btn" type="submit" value="edit " />
                </form>

            </div>
        </>

    );

}

export default EditProduct;