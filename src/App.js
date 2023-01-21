import './App.css';
import { useState } from 'react';

const App = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [previousValue, setPreviousValue] = useState(0);
  const [operator, setOperator] = useState('');
  // const [decStatus, setDecStatus] = useState(true);
  //const [count, setCount] = useState(1);

  const clear = () => {
    setCurrentValue(0);
    // setDecStatus(true);
  };

  const backspace = () => {
    setCurrentValue(Math.floor(currentValue / 10));
  };

  const handleNumberClick = (num) => {
    setCurrentValue(currentValue * 10 + num);
  };

  // const handleNumberClick = (num) => {
  //   //setCount(1);
  //   if (num === 0) {
  //     setCurrentValue(currentValue + '0');
  //     setCount(count + 1);
  //   } else if (Number.isInteger(currentValue)) {
  //     setCurrentValue(currentValue * 10 + num);
  //   } else {
  //     //setCount(1);
  //     let val = parseFloat(currentValue);
  //     setCurrentValue(val + num / Math.pow(10, count));
  //     setCount(count + 1);
  //     // cur val is now float
  //   }
  // };

  // const handleDecimalClick = () => {
  //   if (decStatus) {
  //     setCurrentValue(currentValue.toString() + '.');
  //     setDecStatus(false);
  //   }
  // };

  const handleOperatorClick = (newOperator) => {
    setPreviousValue(currentValue);
    setCurrentValue(0);
    setOperator(newOperator);
    //setCount(1);
    // setDecStatus(true);
  };

  const handleEqualClick = () => {
    // setDecStatus(true);
    //setCount(1);
    if (operator === '+') {
      setCurrentValue(previousValue + currentValue);
    } else if (operator === '-') {
      setCurrentValue(previousValue - currentValue);
    } else if (operator === '*') {
      setCurrentValue(previousValue * currentValue);
    } else if (operator === '/') {
      setCurrentValue(previousValue / currentValue);
    }
  };
  return (
    <>
      <div className="container">
        <form action="">
          <input type="text" value={currentValue} />
        </form>
        <div className="keypad">
          <button className="highlight" id="clear" onClick={clear}>
            Clear
          </button>
          <button className="highlight" id="backspace" onClick={backspace}>
            C
          </button>
          <button
            className="highlight"
            name="/"
            onClick={() => handleOperatorClick('/')}
          >
            &divide;
          </button>
          <button name="7" onClick={() => handleNumberClick(1)}>
            1
          </button>
          <button name="8" onClick={() => handleNumberClick(2)}>
            2
          </button>
          <button name="9" onClick={() => handleNumberClick(3)}>
            3
          </button>
          <button
            className="highlight"
            name="+"
            onClick={() => handleOperatorClick('+')}
          >
            +
          </button>
          <button name="4" onClick={() => handleNumberClick(4)}>
            4
          </button>
          <button name="5" onClick={() => handleNumberClick(5)}>
            5
          </button>
          <button name="6" onClick={() => handleNumberClick(6)}>
            6
          </button>
          <button
            className="highlight"
            name="-"
            onClick={() => handleOperatorClick('-')}
          >
            &ndash;
          </button>
          <button name="1" onClick={() => handleNumberClick(7)}>
            7
          </button>
          <button name="2" onClick={() => handleNumberClick(8)}>
            8
          </button>
          <button name="3" onClick={() => handleNumberClick(9)}>
            9
          </button>
          <button
            className="highlight"
            name="*"
            onClick={() => handleOperatorClick('*')}
          >
            &times;
          </button>
          <button name="0" onClick={() => handleNumberClick(0)}>
            0
          </button>

          {/* <button name="." onClick={handleDecimalClick}>
            .
          </button> */}
          <button className="highlight" id="result" onClick={handleEqualClick}>
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
