import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import NavbarComponent from './Navbar';
import PostsComponent from './Posts';
import PostComponent from './PostComponent';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route exact path="/" element={<PostsComponent />} />
          <Route exact path="/post" element={<PostComponent />} />
        </Routes>

      </Router>
    </Provider>
  );
}

export default App;
