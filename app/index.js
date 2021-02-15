
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import {About, Users , Home} from './components/pages'

import TodoApp from './components/TodoApp'
class App extends React.Component{
    render(){
        return(
          <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/high">High Priority</Link>
                  </li>
                  <li>
                    <Link to="/medium">Medium Priority</Link>
                  </li>
                  <li>
                    <Link to="/low">Low Priority</Link>
                  </li>
                </ul>
              </nav>

              {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/low">
                  <TodoApp title={'Low Priority'} cacheList={'low'}/>
                </Route>
                <Route path="/medium">
                  <TodoApp title={'Medium Priority'} cacheList={'medium'}/>
                </Route>
                <Route path="/high">
                  <TodoApp title={'High Priority'} cacheList={'high'}/>
                </Route>
                <Redirect from="/" to="/high" />
              </Switch>
            </div>
          </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
