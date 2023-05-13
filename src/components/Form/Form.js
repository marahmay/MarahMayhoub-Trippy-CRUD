import { useState } from 'react';
import './../Form/FormStyle.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const MyForm = (props) => {

    const [email , setEmail] = useState();
    const [password , setPassword] = useState();
    const navigation = useNavigate();

    const reg =(event)=>{

        event.preventDefault();
        axios.post('http://localhost:3000/register', {email , password}).then(res=>{
            // console.log(res);

            if (res.status === 201) {
                navigation("/login");
            }
        });
    }
    return (

        <>

            <div className="MyForm">
                <h1>{props.title}</h1>
                <form onSubmit={reg}>
                    <input className='name' type="text" placeholder={props.placeholderName} required />
                    <input onChange={(event)=> setEmail(event.target.value)} className='email' type="email" placeholder={props.placeholderEmail} required />
                    <input className='subject' type="text" placeholder={props.placeholderSubject} required />
                    <input onChange={(event)=> setPassword(event.target.value)} className='pass' type="password" placeholder={props.placeholderPassword} required />
                    <input className='re_pass' type="password" placeholder={props.placeholderRePassword} required />
                    <textarea cols="30" rows="5" placeholder={props.placeholderMessage}></textarea>
                    <input onClick={reg} className="btn" type="button" value={props.btnValue} />
                </form>

            </div>
        </>
    );
}

export default MyForm;