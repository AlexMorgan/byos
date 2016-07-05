console.log('Hello World!');
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter'; // Imports the code from our Counter.js file

// Render the logic from our 'Counter' import on our index.html doc in the the element with class name: 'mount'
ReactDOM.render(
  React.createElement(Counter),
  document.getElementById('mount')
);
