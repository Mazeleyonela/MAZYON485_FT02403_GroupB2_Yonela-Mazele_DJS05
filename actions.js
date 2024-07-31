// Actions are payloads of information that send data from your application to your store. They are the only source of information for the store.

// Action Types
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const RESET = 'RESET';

// Action Creators
export function add() {
    return { type: ADD };
}

export function subtract() {
    return { type: SUBTRACT };
}

export function reset() {
    return { type: RESET };
}
