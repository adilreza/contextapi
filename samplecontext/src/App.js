import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import About from './component/page/about'
import Users from './component/page/users'
import Home from './component/page/home'

import {MovieProvider} from './contextfile/moviecontext'

function App() {
  return (
      <MovieProvider>
          <div >
              <Router>

                <Switch>
                  <Route path="/about">
                    <About />
                  </Route>
                  <Route path="/users">
                    <Users />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
                
              </Router>
          </div>
      </MovieProvider>


  );
}
export default App;
