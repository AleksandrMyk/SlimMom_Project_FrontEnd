import React, { useState } from "react";
import AsyncSelect from "react-select/async";
import axios from "axios";
function AddProductForm() {
  const [inputValue, setValue] = useState("");
  const [selectedValue, setSelectedValue] = useState(null);
  // handle input change event
  const handleInputChange = (value) => {
    setValue(value);
  };

  // handle selection
  const handleChange = (value) => {
    setSelectedValue(value);
  };

  // load options using API call
  const loadOptions = (inputValue) => {
    let sel;
    const headers = {
      "Content-Type": "application/json",
    };
    axios
      .get(`https://slimmom.herokuapp.com/products?name=${inputValue}`, {
        headers,
      })
      .then((response) => {
        const options = response.data.docs;
        sel = options.map((item) => item.title.ru);
        console.log(sel);
      })
      .catch((error) => {
        if (error) {
          console.log("its some errors ", error);
        }
      });
    return sel;
  };

  return (
    <div className="App">
      <pre>Input Value: "{inputValue}"</pre>
      <AsyncSelect
        cacheOptions
        defaultOptions
        value={selectedValue}
        getOptionLabel={(e) => e.title}
        getOptionValue={(e) => e.id}
        loadOptions={loadOptions}
        onInputChange={handleInputChange}
        onChange={handleChange}
      />
      <pre>Selected Value: {JSON.stringify(selectedValue || {}, null, 2)}</pre>
    </div>
  );
}

export default AddProductForm;
