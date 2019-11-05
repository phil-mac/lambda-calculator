import React, {useState} from "react";
import "./App.css";

// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
import Display from './components/DisplayComponents/Display';
import Specials from './components/ButtonComponents/SpecialButtons/Specials';
import Operators from './components/ButtonComponents/OperatorButtons/Operators';
import Numbers from './components/ButtonComponents/NumberButtons/Numbers';

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  const [inputState, setInputState] = useState('');
  const [outputState, setOutputState] = useState('');

  const addChar = (char) =>{
    setInputState(inputState + char);
    setOutputState(evaluate(inputState + char));
  }

  function evaluate(input){
    let prevNum = 0;
    let currentNum = 0;
    let total = 0;
    let lastOperator = '';

    const inputArray = input.split('');
    inputArray.forEach(char => {
      if (char >= '0' && char <= '9'){
        currentNum = (currentNum * 10) + parseInt(char);
      } else if (char === '.'){
        console.log('got a dot...');
      } else{ //an operator was added
        prevNum = total;
        currentNum = 0;
        lastOperator = char;
      }
      if (currentNum !== 0){
        if(lastOperator === '+'){
          total = prevNum + currentNum;      
        }
        if(lastOperator === '-'){
          total = prevNum - currentNum;      
        }
        if(lastOperator === '/'){
          total = prevNum / currentNum;      
        }
        if(lastOperator === '*'){
          total = prevNum * currentNum;      
        }
        if(lastOperator === ''){
          total = currentNum;
        }
      }
    })
    return total;
  }

  return (
    <div className="container">
      <Logo />
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        {/* <Logo /> */}
        <Display input={inputState} output={outputState}/>
        <Specials />
        <Operators addChar={addChar} />
        <Numbers addChar={addChar} />
      </div>
    </div>
  );
}

export default App;
