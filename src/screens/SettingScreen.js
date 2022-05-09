import { Text, View, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const SettingScreen = ({ navigation }) => {
  const { navigate } = navigation

  const goToPage = () => {
    navigate('Home')
  }
  return (
    <SafeAreaView>
      <Text>estamos en Setting</Text>
      <Text>estamos en Setting</Text>
      <Text>estamos en Setting</Text>
      <Text>estamos en Setting</Text>
      <Text>estamos en Setting</Text>
      <Text>estamos en Setting</Text>
      <Text>estamos en Setting</Text>
      <Text>estamos en Setting</Text>
      <Button title=' ir a ajustes' onPress={goToPage} />
    </SafeAreaView>
  )
}

export default SettingScreen