import PropTypes from 'prop-types';

const Button = ({
  type, className, onClick, value,
}) => (
  <button
    type={type === 'submit' ? 'submit' : 'button'}
    className={className}
    onClick={onClick}
    value={value}
  >
    {value}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  value: PropTypes.string.isRequired,
};

Button.defaultProps = {
  type: 'button',
  onClick: () => {},
};

export default Button;
