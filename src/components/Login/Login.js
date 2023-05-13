import { useNavigate } from 'react-router-dom';
// import MyForm from '../Form/Form';
import MyHero from '../Hero/Hero';
import HeroImg from './../../assets/2.jpg'
import './../Login/LoginStyle.css'
import { useState } from 'react';
import axios from 'axios';

const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigation = useNavigate();

    const log = (event) => {

        event.preventDefault();
        axios.post('http://localhost:3000/login', { email, password }).then((res) => {
            // console.log(res.data);

            localStorage.setItem('accessToken' , res.data.accessToken);
            if (res.status === 200) {
                navigation("/cards");
            }
        });
    }

    return (
        <>
            <div className="SignUpHero">
                <MyHero
                    heroImg={HeroImg}
                    title="Log In"
                />
            </div>
            <div className="MyForm">
                <h1>Log In to enjoy !</h1>
                <form onSubmit={log}>
                    <input onChange={(event) => setEmail(event.target.value)} className='email' type="email" placeholder="Email" required />
                    <input onChange={(event) => setPassword(event.target.value)} className='pass' type="password" placeholder="Password" required />
                    <input onClick={log} className="btn" type="button" value="Log in" />
                </form>

            </div>

        </>

    );
}

export default Login;