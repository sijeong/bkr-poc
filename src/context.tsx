import React, { useState } from 'react';
import { useLocalStore } from 'mobx-react-lite';
import { TStore, createStore } from './store';


// const [age, setAge] = useState(0);
// setAge(1);
type name = '' | null;

export const storeContext = React.createContext<TStore | null>(null);

export const StoreProvider: React.FC = ({ children }) => {
    const store = useLocalStore(createStore);


    return (
        <storeContext.Provider value={store}>
            {children}
        </storeContext.Provider>
    )
}

export default StoreProvider;