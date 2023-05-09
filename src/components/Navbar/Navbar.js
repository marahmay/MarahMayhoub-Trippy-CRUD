import { useState } from "react";
import { MenuItems } from "./MenuItems";
// import Nav from 'react-bootstrap/Nav';
import './NavbarStyle.css';
// import { FaBeer } from 'react-icons/fa';


const MyNavbar = () =>{


    const [state, setstate] = useState(false);
    function handleMenu() {
      setstate(state => !state)
    }

    return(

        <nav>
            <div className="navMenu">
            <h1>Trippy</h1>
            <i className={state ? 'fas fa-times menuIcon' : 'fas fa-bars menuIcon'} onClick={handleMenu}></i>
            </div>

            <ul className={state ? 'active' : 'unActive'}>
                {MenuItems.map((item,index) =>{
                    return(
                        <li className="" key={index}>
                            <a href={item.url} className={item.cName}>
                                <i className={item.icon}></i> {item.name}
                            </a>
                        </li>
                    );
                })}
            <button><a href="/Signup">Sign up</a></button>
            </ul>

        </nav>
        

    );
}


export default MyNavbar