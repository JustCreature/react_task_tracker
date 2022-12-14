import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {

  return <button 
  onClick={onClick}
  style={{ backgroundColor: color }} 
  className='btn'
  >
    { text }
   </button>
}

Button.defaultProps = {
    color: 'seelblue',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    omClick: PropTypes.func,
}

export default Button
