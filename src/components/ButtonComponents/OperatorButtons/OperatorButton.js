import React from "react";

const OperatorButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button style={{background:'lightblue'}} onClick={() => props.addChar(props.op.value)}>{props.op.char}</button>
    </>
  );
};

export default OperatorButton;
