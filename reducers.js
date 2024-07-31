// Reducers specify how the application's state changes in response to actions sent to the store.

const initialState = { count: 0 }; // this the first scenario, which is the Initial State Verification

function tallyReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD':
            return { count: state.count + 1 }; // incrementing the counter 
        case 'SUBTRACT':
            return { count: state.count - 1 };  // decrementing the counter 
        case 'RESET':
            return { count: 0 };  // Resetting the Counter
        default:
            return state;
    }
}
// Export the reducer to be used in the store
export default tallyReducer;