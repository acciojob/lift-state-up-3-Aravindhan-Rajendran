import React, { useState } from "react";
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";
import './../styles/App.css';

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  // Function to update the selectedOption state
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <p>Selected Option: {selectedOption}</p>
      <ChildComponent1 onOptionChange={handleOptionChange} />
      <ChildComponent2 onOptionChange={handleOptionChange} />
    </div>
  );
};

export default App;
