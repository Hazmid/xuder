import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions';
import {opposite} from './actions'


function App() {

const counter = useSelector(state => state.counter);
const isLogged = useSelector(state => state.isLogged);
const dispatch = useDispatch();



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h2>Counter {counter}</h2>
        <button onClick={() => dispatch(increment(5))}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>


        <button onClick={() => dispatch(opposite())}>O</button>

        {isLogged ? <h3>Valuable information i shouldn't see unless logged in</h3> : ''}
      
      </header>
    </div>
  );
}

export default App;
