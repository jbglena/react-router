import React, { useEffect } from "react";
import { useParams , useNavigate} from 'react-router-dom';
import { useDispatch, useSelector  } from "react-redux";
import {deleteCard , fetchUsers} from './actions/CardsAction';


const Card =() =>{
    const dispatch = useDispatch();
    const navegate = useNavigate();
 
    const { user } = useParams();   // obtener el nombre del usuario en la URL
    const cards = useSelector((state) => state.cards);  //obtengo todas lar tarjetas
    const users = useSelector((state) => state.users); // Usuarios traidos de la API
    console.log(users)
    const { title, body, id } = cards.find((card) => card.title === user); //busco las que coincidad el title con el usuario

     const onDeletedCard = () =>{
        dispatch(deleteCard(id));//funcion creada en CardsAction.js
        navegate("/contact") //una vez elimidado me redirige a contactos
     }

     //trae los datos de la api
     useEffect(() =>{
         dispatch(fetchUsers());
     }, [dispatch]);

        return users.map((user) =>{
            return(
                <div className="ui raised very padded text container segment" style= {{marginTop:'80px'}} key={user.id}>
                <h3 className="ui header" >{ user.name }</h3>
                <p>Username: {user.username} </p>
                <p> E-mail: { user.email } </p>
                <p> Phone: { user.phone } </p>
                <button className='ui primary button' onClick = {onDeletedCard}> Delete </button>
            </div>
            )
        })
}


export default Card;