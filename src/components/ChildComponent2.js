import React from "react";

const ChildComponent2 = ({ onOptionChange }) => {
  return (
    <div>
      <button onClick={() => onOptionChange('Option 2')}>Select Option 2</button>
    </div>
  );
};

export default ChildComponent2;
