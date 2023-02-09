const initialValue = 0;

export const changeTheNumber = (state =initialValue, action)=>{
    switch(action.type){
        case "INCREMENT": return state + action.payload;
        case "DECREMENT": return state -1;
        default: return state;
    }
}