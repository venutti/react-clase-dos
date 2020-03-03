import React, { useState, useEffect } from 'react';
import FancyInput from '../small/FancyInput';

const TitleChanger = () => {
  const [value, setValue] = useState('');
  useEffect(() => {
    document.title = value;
    // Qué pasa si salimos de esta página?
  });
  return (
    <FancyInput title="Cambiame!" value={value} onChange={event => setValue(event.target.value)} />
  );
};
export default TitleChanger;
