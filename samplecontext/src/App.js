import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import About from './component/page/about'
import Users from './component/page/users'
import Home from './component/page/home'

import MovieList from './component/page/movielist'
import {MovieProvider} from './contextfile/moviecontext'

function App() {
  return (
      <MovieProvider>
          <div className="app" >
                    <About />
                    <Users />
                    <Home />
                    <MovieList/>
          </div>
      </MovieProvider>


  );
}
export default App;
