import { Text } from 'react-native'
import PropTypes from 'prop-types'

const Saludar = (props) => {
  const { firstname, lastname } = props
  return (
    <>
      <Text>hola {firstname} {lastname}</Text>
    </>
  )
}

export default Saludar

Saludar.defaultProps = {
  firstname: "carlos",
  lastname: "parra"
}

Saludar.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string
}