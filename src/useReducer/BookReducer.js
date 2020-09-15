export const BookReducer = (state = {}, action = "") => {
    console.log("Hola a todos")
    switch (action.type) {
        case 'add':
            return action.payload;
        case 'show':
            return state;
        default:
            return state;
    }
}