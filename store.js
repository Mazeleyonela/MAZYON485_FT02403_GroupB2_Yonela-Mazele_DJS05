import { createStore } from 'redux';
import tallyReducer from './reducers';

const store = createStore(tallyReducer);

function createStore(reducer) {
    let state;
    let listeners = [];

    // Method to get the current state
    const getState = () => state;

    // Method to dispatch actions
    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    };

    // Method to subscribe to state changes
    const subscribe = (listener) => {
        listeners.push(listener);
        // Return an unsubscribe function
        return () => {
            listeners = listeners.filter(l => l !== listener);
        };
    };

    // Initialize the state by dispatching a dummy action
    dispatch({});

    return { getState, dispatch, subscribe };
}


