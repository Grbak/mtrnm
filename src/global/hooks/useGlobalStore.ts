import { useContext } from 'react';
import { GlobalStoreContext } from 'local/Application/Application';

export const useGlobalStore = () => {
    const globalStore = useContext(GlobalStoreContext);

    return globalStore;
};
