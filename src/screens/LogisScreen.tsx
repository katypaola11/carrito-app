import React, { useState } from 'react'
import { View, Text, StatusBar, Alert } from 'react-native'
import TitleComponens from '../components/TitleComponens'
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../theme/commons/constants'
import { BodyComponents } from '../components/BodyComponents'
import { styles } from '../theme/appTheme'
import { InputComponent } from '../components/InputComponent'
import { ButtonComponent } from '../components/ButtonComponent'
import Icon from 'react-native-vector-icons/MaterialIcons';


//definir interface estructura formulario(objeto)
interface LoginForm {
  email: string;
  password: string;
}

//definir interfaz de la estructura de objetos usuarios
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}
//definir arreglo con usuarios de prueba
const users: User[] = [
  {id: 1, name: 'KatyPaola', email: 'holam@gmail.com', password: '12345'},
  {id: 2, name: 'Kp2', email: 'hol@gmail.com',  password: '12345'}
];  


export const LogisScreen = () => {
  //hoot use state:permite manejar el estado del componente
  const [loginForm, setLoginForm] = useState<LoginForm>({
    email: '',
    password: ''
  });


  //funcion para manejar los cambios del formulario
  const handleChange = (name: string, value: string) => {
    //console.log(name, value);
    //modificar la data del login form
    setLoginForm({ ...loginForm, [name]: value });
  }

  //funcion para iniciar sesion


  //hoo useState: permite manejar el estado de password
  const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

  //hook para iniciar sesion
  const handleLogin = (): void => {
    if (loginForm.email === '' || loginForm.password === '') {
      Alert.alert('Por favor llena todos los campos');
      return;
    }

    console.log(loginForm);
  }

  return (
    <View>
      <StatusBar backgroundColor={SECONDARY_COLOR} />
      <TitleComponens title="Iniciar Sesion" />
      <BodyComponents >
        <Text style={styles.titlePrincipal}>BIENVENIDO DE NUEVO</Text>
        <Text style={styles.title2}>Realiza tus compras de manera rapida y segura</Text>

        <View style={styles.containerForm}>
          <InputComponent placeholder='Correo' keyboardType='email-address' handleChange={handleChange} name='email' />
          <InputComponent placeholder='Contraseña' keyboardType='default' isPassword={hiddenPassword} handleChange={handleChange} name='password' />
          <Icon name={hiddenPassword ? 'visibility' : 'visibility-off'} size={24} color={PRIMARY_COLOR} style={styles.iconPassword} onPress={() => setHiddenPassword(!hiddenPassword)} />


        </View>

        <ButtonComponent title="Iniciar Sesion" ChangeLogin={handleLogin} />
      </BodyComponents>

    </View>
  )
}


