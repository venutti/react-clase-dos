import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './FancyButton.css';

function FancyButton({ className, fullBorder = false, ...props }) {
  return (
    <button
      className={cx('navigation-button', className, {
        'navigation-button--full-border': fullBorder,
      })}
      {...props}
    />
  );
}

FancyButton.propTypes = {
  className: PropTypes.string,
  fullBorder: PropTypes.bool,
};

export default FancyButton;
