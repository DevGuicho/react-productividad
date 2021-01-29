import React from 'react';
import ReactDOM from 'react-dom';
import ProductState from './context/products/productState';
import StudentState from './context/students/studentState';
import App from './routes/App';

ReactDOM.render(
  <ProductState>
    <StudentState>
      <App />
    </StudentState>
  </ProductState>,
  document.getElementById('root')
);
