import React, { useState } from 'react';

function Dropdown({ value, disabled }) {
  const [selectedValues, setSelectedValues] = useState(value);

  const handleOptionToggle = (option) => {
    if (disabled) {
      return;
    }

    if (selectedValues.includes(option)) {
      setSelectedValues(selectedValues.filter((value) => value !== option));
    } else {
      setSelectedValues([...selectedValues, option]);
    }
  };

  const options = ['Option 1', 'Option 2', 'Option 3' , 'Option 4', 'Option 5', 'Option 6', 'Option 7', 'Option 8', 'Option 9', ];

  return (
    <div
      style={{
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        height: '150px',
        width: '400px',
        overflow: 'auto',
        border: '1px solid #ccc',
        borderRadius: '4px',
        padding: '10px',
      }}
    >
      <div style={{ display: 'grid' }}>
        {options.map((option) => (
          <label key={option} style={{ marginRight: '10px' }}>
            <input
              type="checkbox"
              value={option}
              checked={selectedValues.includes(option)}
              onChange={() => handleOptionToggle(option)}
              disabled={disabled}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
