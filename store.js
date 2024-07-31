import tallyReducer from './reducers';

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

// Create the store using the custom createStore function
const store = createStore(tallyReducer);

// Export the store to be used elsewhere
export default store;


