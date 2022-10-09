import { useContext } from 'react';
import { GlobalStoreContext } from 'global/stores/Global.store';

export const useGlobalStore = () => {
    const globalStore = useContext(GlobalStoreContext);

    return globalStore;
};
