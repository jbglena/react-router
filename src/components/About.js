import React from "react";
import './css/Modal.css'
import Modal from "./Modal";

const About = () => {

    return(
        <div>
            <Modal />
            <div className="ui raised very padded text container segment" style= {{marginTop:'80px'}}>
                <h3 className="ui header">About</h3>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu</p>
                <button className="ui button"> Open modal </button>
            </div>
           
        </div>
    )
}
export default About;