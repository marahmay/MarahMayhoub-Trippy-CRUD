import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Service from './components/Service/Service';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import Cards from './components/Cards/Cards';
import AddProduct from './components/Products/addProduct';
import EditProduct from './components/Products/editProduct';
// import 'bootstrap/dist/css/bootstrap.min.css'



















const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/Service",
        element:<Service/>,
      },
      {
        path: "/",
        element:<Home/>,
      },
      {
        path: "/Contact",
        element:<Contact />,
      },
      {
        path: "/Signup",
        element:<SignUp />,
      },
      {
        path: "/About",
        element:<About />,
      },
      {
        path: "/Login",
        element:<Login />,
      },
      {
        path: "/cards",
        element:<Cards />,
      },
      {
        path: "add-product",
        element:<AddProduct />,
      },
      {
        path: "edit/:id",
        element:<EditProduct />,
      },

    ]
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
