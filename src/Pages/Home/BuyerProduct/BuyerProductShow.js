import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from '../../../Context/CartContext';

import './BuyerProductShow.css'
const BuyerProductShow = (props) => {
    const { id, name, img } = props.services;



    const [cart, setCart] = useContext(CartContext);

    const handleAddToCart = (product) => {

        const exists = cart.find(pd => pd._id === product._id);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd._id !== product._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];
        } else {
            product.quantity = 1;
            newCart = [...cart, product]

        }
        localStorage.setItem("productCart", JSON.stringify(newCart));
        setCart(() => newCart);
        alert('Add to Cart Successfully');
    };



    return (
        <div>

            <div data-aos="fade-up" className="col">
                <div className="card  project">


                    <img className="image-design card-img-top" src={img} alt="..." />



                    <div className="card-body body-designs works">

                        <NavLink to={`/friend/${id}`}>

                            <button className="button banners bg-dark">Details Now</button>
                        </NavLink>



                        <button onClick={() => handleAddToCart(props.services)} className="banners bg-dark">
                            Add cart
                        </button>




                    </div>


                </div>
            </div>

        </div>
    );
};

export default BuyerProductShow;