import { TextInput, Button, Text, View } from 'react-native'

const LoginForm = () => {

  return (
    <View>
      <Text>Componente LoginForm</Text>
      <TextInput placeholder='email' />
      <TextInput placeholder='contraseña' />
      <Button title='enviar' onPress={() => console.log("enviado")} />
    </View>
  )
}

export default LoginForm