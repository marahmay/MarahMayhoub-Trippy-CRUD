import { useState } from 'react';
import './../Form/FormStyle.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import MyHero from '../Hero/Hero';

import HeroImg from './../../assets/2.jpg'


const AddProduct = (props) => {

    const [name, setTitle] = useState();
    const [description, setDescription] = useState();
    const navigation = useNavigate();

    const addProduct = (event) => {

        event.preventDefault();
        axios.post('http://localhost:3000/products', {name , description} , {

        headers:{
            authorization:localStorage.getItem("accessToken"),
        }

        }).then(res => {
            // console.log(title,description);

            if (res.status === 201) {
                navigation("/cards");
            }
        });
    }
    return (

        <>

            <div className="SignUpHero">
                <MyHero
                    heroImg={HeroImg}
                    title="Add Products"
                />
            </div>

            <div className="MyForm">
                <h1>add new product</h1>
                <form onSubmit={addProduct}>
                    <input onChange={(event) => setTitle(event.target.value)} className='title' type="text" placeholder="add title" required />
                    <input onChange={(event) => setDescription(event.target.value)} className='des' type="text" placeholder="description" required />
                    <input onClick={addProduct} className="btn" type="button" value="add product" />
                </form>

            </div>
        </>
    );
}

export default AddProduct;