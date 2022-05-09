import { Text, View, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = ({ navigation }) => {
  const { navigate } = navigation

  const goToSetting = (pageName) => {
    navigate(pageName)
  }

  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Button title='ir a settings' onPress={() => goToSetting('Setting')} />
    </SafeAreaView>
  )
}

export default HomeScreen