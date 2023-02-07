import React from 'react';
import ReactDOM from 'react-dom/client';
import {compose, pipe} from 'lodash/fp';

const App = params => {
  const x = 2
  const double = num => num * 2
  const square = num => num*num
  const half = num => num / 2
  const divide = num2 => num1 => num1 / num2
  const mathCalculate=pipe(double, square, half, divide(3))
  return <h1>{mathCalculate(x)}</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
