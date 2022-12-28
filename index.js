const { createStore } = require("redux");
// initialize the constants value;
const INCREMENT = "INCREMENT";
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';
// state - count: 0;
const initialState = {
    count: 0,
}

// action - INCREMENT, DECREMENT, RESET ( action is always an object )
/*
we should keep the action inside the function as return value. So that we can easily use this function.
*/
const incrementAction = () => {
    return {
        type:INCREMENT,
    }
};

const decrementAction = () => {
    return {
        type:DECREMENT,
    }
};

const resetAction = () => {
    return {
        type:RESET,
    }
};
// reducer 
/*
reduser is nothing but a function who manage all the functionality based on the conditions
*/
const counterReducer = (state=initialState, action) => {
    switch(action.type){
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            }
        case DECREMENT:
            return {
                ...state,
                count:state.count - 1,
            }
        case RESET:
            return {
                ...state,
                count: 0,
            }
        default:
            //
    }
}
// store
/*
There are three things in the store: getState(), dispatch() and subscribe();
The main purpose of store is to store the data of the state.
*/
const store = createStore(counterReducer);
store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({ type: INCREMENT });
store.dispatch({ type: INCREMENT });
store.dispatch({ type: INCREMENT });
store.dispatch({ type: INCREMENT });
store.dispatch({ type: RESET  });
