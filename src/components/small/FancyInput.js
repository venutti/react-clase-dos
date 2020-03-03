import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './FancyInput.css';

const FancyInput = ({ className, theme = 'dark', title, ...props }) => {
  return (
    <>
      {title && <label htmlFor={title}>{title}</label>}
      <input
        name={title}
        className={cx('fancy-input', className, `fancy-input--${theme}`)}
        {...props}
      />
    </>
  );
};

FancyInput.propTypes = {
  theme: PropTypes.oneOf(['dark', 'light']),
  className: PropTypes.string,
  title: PropTypes.string,
};

export default FancyInput;
