import './App.css';
import Button from './components/Button';
import calLogo from './img/digitalCalcu.webp'
import Screen from './components/Screen';
import ButtonClear from './components/ButtonClear';
import { useState } from 'react';


function App() {
  const [input, setInput] = useState('0');

  const addValue = (value)=>{
    setInput(prevInput => prevInput + value);
  }

  return (
    <div className="App">
      <div className='cal-logo-container'>
        <img
          src = {calLogo}
          className='cal-logo'
          alt='Logo calculator'
        />       
      </div>
      <div className='cal-container'>
        <Screen input={input}/>
        <div className='row'>
          <Button onClick={() => addValue('7')}>7</Button>
          <Button onClick={() => addValue('8')}>8</Button>
          <Button onClick={() => addValue('9')}>9</Button>
          <Button onClick={() => addValue('*')}>*</Button>
        </div>
        <div className='row'>
          <Button onClick={() => addValue('4')}>4</Button>
          <Button onClick={() => addValue('5')}>5</Button>
          <Button onClick={() => addValue('6')}>6</Button>
          <Button onClick={() => addValue('-')}>-</Button>
        </div>
        <div className='row'>
          <Button onClick={() => addValue('1')}>1</Button>
          <Button onClick={() => addValue('2')}>2</Button>
          <Button onClick={() => addValue('3')}>3</Button>
          <Button onClick={() => addValue('+')}>+</Button>
        </div>
        <div className='row'>
          <Button onClick={() => addValue('=')}>=</Button>
          <Button onClick={() => addValue('0')}>0</Button>
          <Button onClick={() => addValue('.')}>.</Button>
          <Button onClick={() => addValue('/')}>/</Button>
        </div>
        <div className='row'>
          <ButtonClear> Clear </ButtonClear>
        </div>
      </div>

    </div>
  );
}

export default App;
