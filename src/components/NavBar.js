import React from "react";
import { NavLink , useNavigate } from 'react-router-dom'


const NavBar =() =>{
//Redireccionar pagina
// let navigate = useNavigate()

// function Redirect (){
//     navigate('./about')
// }

// setTimeout(Redirect,4000);

    return(
        <nav className="ui raised very padded segment">
            <a className="ui teal inverted segment" href="/">Gloria</a>
            <div className="ui right floated header">
                <button className="ui button"> <NavLink to="/"> Home</NavLink> </button>
                <button className="ui button"> <NavLink to="/about"> About</NavLink> </button>
                <button className="ui button"> <NavLink to="/contact"> Contact</NavLink> </button>
            </div>
        </nav>
    )
}

export default NavBar;