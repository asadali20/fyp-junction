import React from 'react';
import img1 from '../../assests/1.jpg'
import './card-style.css'

const Card = props =>{
    return(
        <div className= "card text-center">
            <div className="overflow">
                <img src={img1} alt=""/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">Card title</h4>
                <p className="card-text text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor sint velit at harum</p>
                <a href="#" className="btn btn-outline-success">Any Where</a>
            
            </div>  
        </div>

    );
};
export default Card;