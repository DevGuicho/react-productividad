import { useDispatch } from '../store/StoreProvider';
const API = 'https://productividad-api-devguicho.vercel.app/products';

const useFetchData = (method, data) => {
  switch (method) {
    case 'POST':
      return fetch(`${API}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((res) => true)
        .catch((err) => false);
    case 'PUT':
      return fetch(`${API}/${data.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((res) => true)
        .catch((err) => false);
    case 'DELETE':
      return fetch(`${API}/${data.id}`, {
        method: 'DELETE',
      })
        .then((res) => true)
        .catch((err) => false);
    default:
      return false;
  }
};

export const usePost = (data) => {
  const dispatch = useDispatch();
  fetch(`${API}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      dispatch({
        type: 'ADD_PRODUCT',
        value: data,
      });
    })
    .catch((err) => console.log(err));
};

export default useFetchData;
