import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {

  return (
    <div>
      <header className='header'>
        <h1>Task Tracker</h1>
        <Button color={props.showAdd ? 'red' : 'green'} text={props.showAdd ? 'Close' : 'Add'} onClick={props.onAdd} />
      </header>
    </div>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
