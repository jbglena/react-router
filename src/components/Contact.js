import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Contact = () => {
    const cards = useSelector((state)=> state.cards);

    return(
    <div>
        {cards.map(card=>{
            return(
                <div className="ui raised very padded text container segment" style= {{marginTop:'50px'}} key={card.id} >
                <Link to={`/${card.title}`} className="ui header" >{card.title}</Link>
                <p> {card.body} </p>
            </div>  
            )
        })}

        {/* ESTO ERA ANTES DE UTILIZAR EL MEDOTO REDUX
        <div className="ui raised very padded text container segment" style= {{marginTop:'80px'}}>
            <Link to='/card/Alex' className="ui header">Alex</Link>
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
        </div>
        <div className="ui raised very padded text container segment" style= {{marginTop:'80px'}}>
            <Link to='/card/Julieta'  className="ui header">Julieta</Link>
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>
        <div className="ui raised very padded text container segment" style= {{marginTop:'80px'}}>
            <Link to='/card/Santi' className="ui header">Santi</Link>
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
        </div> */}
    </div>
    )
}

export default Contact;