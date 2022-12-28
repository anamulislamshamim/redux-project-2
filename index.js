const { createStore } = require("redux");
// initialize the constants value;
const INCREMENT = "INCREMENT";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';
const ADD_USER = 'ADD_USER';
// state - count: 0;
const initialState = {
    user: ['shamim'],
    count: 1,
};


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

const incrementByValue = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: value,
    }
};

const addUser = (userName) => {
    return {
        payload:userName,
        type:ADD_USER,
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
        case INCREMENT_BY_VALUE:
            return {
                ...state,
                count: state.count + action.payload,
            }
        default:
            //
    }
};

// addUser reducer
const addUserReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_USER:
            return {
                ...state,
                count: state.user.length + 1,
                user: [...state.user, action.payload],
            }
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
// store.dispatch(incrementByValue(2));
// store.dispatch(incrementByValue(2));
// store.dispatch(incrementByValue(2));
// store.dispatch(incrementByValue(2));
// store.dispatch(incrementByValue(2));
// store.dispatch(incrementByValue(2));
// store.dispatch(decrementAction());
// store.dispatch(decrementAction());
// store.dispatch(decrementAction());
// store.dispatch(decrementAction());
// store.dispatch(decrementAction());
// store.dispatch(resetAction());
// store.dispatch(incrementAction());
// store.dispatch(incrementByValue(5));
const userStore = createStore(addUserReducer);
userStore.subscribe(() => {
    console.log(userStore.getState());
});

userStore.dispatch(addUser("tamim"));
userStore.dispatch(addUser("rashid"));

