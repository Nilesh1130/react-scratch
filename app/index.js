
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import TodoApp from './components/TodoApp'
class App extends React.Component{
    render(){
        return(
            <TodoApp />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
