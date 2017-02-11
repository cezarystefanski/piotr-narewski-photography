import React from 'react';
import ReactDOM from 'react-dom';

const MainTest = () => (
  <div>
    <span>WORKING???</span>
  </div>
);

const rootMount = document.getElementById('root');

ReactDOM.render(<MainTest />, rootMount);
