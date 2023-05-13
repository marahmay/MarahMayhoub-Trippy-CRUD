// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import { Title } from "./shared/StyledComponents";

// import { useNavigate } from 'react-router-dom';
import DeleteProduct from '../Products/deleteProduct';
import './../Cards/cardStyle.css'
// import { useState } from 'react';
// import Cards from './Cards';

function CardComponent({ data }) {


  // const [title, setTitle] = useState();
  // const [description, setDescription] = useState();
  // const navigation = useNavigate();

  // const navigation = useNavigate();
  // const showProduct = () => {

  //   navigation(`/edit/${data.id}`);
  // }

  return (
    <div className="cc">
      {/* {data?.images ? <img alt="no image" src={data?.images[0]} /> : null} */}

      <div className='j'>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <a href={`MarahMayhoub-Trippy-CRUD/edit/${data.id}`} className='btnEdit'>edit</a>
        <button onClick={() => DeleteProduct(data.id)}  className="btnDelete">delete</button>
      </div>
    </div>
  );
}

export default CardComponent;