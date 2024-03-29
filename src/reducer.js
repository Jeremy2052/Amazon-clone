export const initialState = {
    basket: [],
    user: null,
};
// function to sum up the total with SELECTORS
export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);

//reducer
const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                //set to current authenticated user
                user: action.user
            }
        case 'ADD_TO_BASKET':
            //Logic for adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            };

        case 'REMOVE_FROM_BASKET':
            //lOGIC FOR REMOBING ITEM FROM BASKET
            //set variable to current array basket
            let newBasket = [...state.basket];
            // grab index if product if in the current array basket
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if (index >= 0){
                //item exists in basket, remove it
                newBasket.splice(index, 1);
            }else{
                console.warn('Cant remove product (id: $(action.id) as its not in the basket') 
            }
            //set basket to new basket after removing
            return {...state, basket:newBasket}

        default:
            return state;
    }
}

export default reducer;