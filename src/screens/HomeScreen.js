import { Text, View, Button } from 'react-native'

const HomeScreen = ({ navigation }) => {
  const { navigate } = navigation

  const goToSetting = (pageName) => {
    navigate(pageName)
  }

  return (
    <View>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Button title='ir a settings' onPress={() => goToSetting('Setting')} />
    </View>
  )
}

export default HomeScreen