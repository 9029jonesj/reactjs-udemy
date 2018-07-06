import {
    createStore
} from 'redux';

const incrementCount = ({
    incrementBy = 1
} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({
    decrementBy = 1
} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
});

const reset = () => ({
    type: 'RESET',
    count: 0
});
// Reducers
// 1. Reducers are pure functions (ie. Output only depends on input. Does not interact with anything outside of its scope)
// 2. Never change state or action.
const countReducer = (state = {
    count: 0
}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: action.count
            };
        case 'SET':
            return {
                count: action.count
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({
    incrementBy: 7
}));

store.dispatch(incrementCount());

store.dispatch(reset());

// unsubscribe();

store.dispatch(decrementCount());

store.dispatch(decrementCount({
    decrementBy: 10
}));

store.dispatch(setCount({ count: 999 }));
