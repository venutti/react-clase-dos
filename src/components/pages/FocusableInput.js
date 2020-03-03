import React, { useRef } from 'react';

const FocusableInput = () => {
  const inputRef = useRef();
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus that input!</button>
    </div>
  );
};
export default FocusableInput;
