import axios from 'axios';

export const deleteCard = (id) =>{
    return{
        type: "DELETE_CARD",
        payload:id,
    };
};

// consumir una Api externa usando redux
export const fetchUsers = () =>{
    return (dispatch) =>{
        axios
        .get ("https://jsonplaceholder.typicode.com/users")
        .then ((response) =>{ // then xq es async 
            dispatch({
                type: "FETCH_USERS",
                payload:response.data,
            })
        })
        .catch((error) =>{
            console.log(error);
        })
    }
}