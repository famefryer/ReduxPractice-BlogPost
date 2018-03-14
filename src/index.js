import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore , applyMiddleware} from 'redux';
import {BrowserRouter,Route} from 'react-router-dom'

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends React.Component {
  render(){
    return <div>Hello</div>
  }
}

class Goodbye extends React.Component {
  render(){
    return <div>Good Bye</div>
  }
}


ReactDOM.render((<BrowserRouter>
  <div>
    Headder
    <Route path="/hello" component={Hello}/>
    <Route path="/goodbye" component={Goodbye} />
  </div>
</BrowserRouter>)
  ,document.querySelector('.root'));
