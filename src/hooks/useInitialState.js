import { useEffect } from 'react';
import { useDispatch } from '../store/StoreProvider';

const API = 'https://productividad-api-devguicho.vercel.app/products';

const useInitialState = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: 'FETCH_DATA',
          value: data.data,
        });
        return data.data;
      });
  }, []);
};

export default useInitialState;
