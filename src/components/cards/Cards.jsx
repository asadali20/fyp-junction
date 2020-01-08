import React,{Component} from 'react';
import Card from './CardsUI'
import './card-style.css'
import img1 from '../../assests/1.jpg';


class Cards extends Component
{
    render(){
        return(
            
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card img={img1} des="Here you can enter the description of the project" title="Project 1"/>
                    </div>
                    <div className="col-md-4">
                        <Card img={img1} des="Here you can enter the description of the project" title="Project 2" />
                    </div>
                    <div className="col-md-4">
                        <Card img={img1} des="Here you can enter the description of the project" title="Project 3" />
                    </div>
                </div>
            </div>
        )
    }
}
export default Cards;