const initialState ={
    cards: [
        {
            id:1, 
            title: 'Alex', 
            body:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.'
        },
        {
            id:2, 
            title: 'Julieta', 
            body:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'
        },
        {
            id:3, 
            title: 'Santi', 
            body:'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,Neque porro quisquam est qui dolorem ipsum quia dolor sit amet'
        }
    ],
    users:[]
}

const rootReducer = (state = initialState, action) =>{
    switch(action.type){
        case "DELETE_CARD":
            return{
                ...state,
                cards: state.cards.filter ((card) => card.id !==action.payload),
            };
            case "FETCH_USERS":
                return{
                    ...state,
                    users: action.payload,
                };
            default:
                return state;
    }
};

export default rootReducer;