import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Below lines were defaults from create-react-app
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import App from './App';
import AddItem from './components/AddItem';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/add-item' component={AddItem} />
    </div>
  </Router>,
  document.getElementById('root')
);
