import { useState } from "react";

function UseFormInput(initialValue) {
    //Sets the initial value of the inputs for name/location
    const [value, setValue] = useState(initialValue);
    //handles when the name/location are changed
    function handleChange(e) {
      setValue(e.target.value);
    }
    //returns the value of the name/location inputs and calls handleChange when they are changed
    return {
      value,
      onChange: handleChange
    };
  }

  export {UseFormInput};