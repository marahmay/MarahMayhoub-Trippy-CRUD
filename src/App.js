// import logo from './logo.svg';
import './App.css';
// import MyHero from './components/Hero/Hero';
import MyNavbar from './components/Navbar/Navbar';
// import HeroImg from './assets/12.jpg';
// import MyDestination from './components/Destination/Destination';
// import MyTrips from './components/Trips/Trips';
import MyFooter from './components/Footer/Footer';
import {  Outlet } from "react-router-dom";
// import Home from './components/Home/Home';


function App() {
  return (
    <div className="App">

      <MyNavbar />

      {/* <Home /> */}

      {/* <Navigate to={"/Trippy/Home"} /> */}
      <Outlet />

      <MyFooter />
    </div>
  );
}

export default App;
