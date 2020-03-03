import React, { useState } from 'react';
import FancyInput from '../small/FancyInput';

const CustomHook = () => {
  const [value, setValue] = useState(''); // refactor to custom hook
  return (
    <FancyInput
      title="Custom hook"
      value={value}
      onChange={event => setValue(event.target.value)}
    />
  );
};
export default CustomHook;
