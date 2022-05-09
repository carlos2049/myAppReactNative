import { Text, View, Button } from 'react-native'

const SettingScreen = ({ navigation }) => {
  const { navigate } = navigation

  const goToPage = () => {
    navigate('Home')
  }
  return (
    <View>
      <Text>estamos en Setting</Text>
      <Text>estamos en Setting</Text>
      <Text>estamos en Setting</Text>
      <Text>estamos en Setting</Text>
      <Text>estamos en Setting</Text>
      <Text>estamos en Setting</Text>
      <Text>estamos en Setting</Text>
      <Text>estamos en Setting</Text>
      <Button title=' ir a ajustes' onPress={goToPage} />
    </View>
  )
}

export default SettingScreen