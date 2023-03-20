import Context from './Context';
import { useContext } from 'react';

function useStore() {
    const state = useContext(Context);
    return state;
}

export default useStore;
