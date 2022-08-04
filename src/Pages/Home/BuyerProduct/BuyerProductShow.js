import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './BuyerProductShow.css'
const BuyerProductShow = (props) => {
    const {id, name, img } = props.services;

    return (
        <div>

<div data-aos="fade-up" class="col">
              <div className="card  project">
                
               
                            <img className="image-design" src={img} class="card-img-top" alt="..." />


                          
                <div className="card-body body-designs works">
                               
                <NavLink to={`/friend/${id}`}>
                                
                                <button className="button banners bg-dark">Details Now</button>
                                </NavLink>
                    
                            

              <button className="banners bg-dark">
           Add cart
            </button>

            
                                  
            
                           </div>

               
              </div>
            </div>
            
        </div>
    );
};

export default BuyerProductShow;