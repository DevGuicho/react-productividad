import storeReducer, { initialStore } from './storeReducer';

const { createContext, useReducer, useContext } = require('react');

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(storeReducer, initialStore);
  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
const useStore = () => useContext(StoreContext).store;
const useDispatch = () => useContext(StoreContext).dispatch;
export { StoreContext, useStore, useDispatch };

export default StoreProvider;
