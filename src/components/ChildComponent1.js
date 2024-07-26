import React from "react";

const ChildComponent1 = ({ onOptionChange }) => {
  return (
    <div>
      <button onClick={() => onOptionChange('Option 1')}>Option 1</button>
    </div>
  );
};

export default ChildComponent1;
