import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/CallToAction.module.css'; // Import your CSS module for styling

const CallToAction = ({ text, onClick, link, styleType }) => {
  return (
    <div className={`cta-container ${styleType}`}>
      {link ? (
        <a href={link} className="cta-button" onClick={onClick}>
          {text}
        </a>
      ) : (
        <button className="cta-button" onClick={onClick}>
          {text}
        </button>
      )}
    </div>
  );
};

CallToAction.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  link: PropTypes.string,
  styleType: PropTypes.string, // Optional, for different styles (e.g., primary, secondary)
};

CallToAction.defaultProps = {
  onClick: () => {},
  link: '',
  styleType: 'primary',
};

export default CallToAction;
