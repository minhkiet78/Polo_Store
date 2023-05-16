import Context from './Context';
import { useReducer } from 'react';
import { initState, reducer } from './reducer';

function isPromise(obj) {
    return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function wrapperDispatch(dispatch) {
    return function (action) {
        if (isPromise(action.payload)) {
            action.payload.then((v) => {
                dispatch({ type: action.type, payload: v });
            });
        } else {
            dispatch(action);
        }
    };
}

function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, initState);

    return <Context.Provider value={[state, wrapperDispatch(dispatch)]}>{children}</Context.Provider>;
}

export default Provider;
