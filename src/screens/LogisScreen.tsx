import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import TitleComponens from '../components/TitleComponens'
import { SECONDARY_COLOR } from '../theme/commons/constants'
import { BodyComponents } from '../components/BodyComponents'
import { styles } from '../theme/appTheme'
import {InputComponent} from '../components/InputComponent'

export const LogisScreen = () => {
  return (
    <View>
        <StatusBar backgroundColor={SECONDARY_COLOR}/>
        <TitleComponens title="Iniciar Sesion" />
        <BodyComponents >
          <Text style={styles.titlePrincipal}>BIENVENIDO DE NUEVO</Text>
          <Text style={styles.title2}>Realiza tus compras de manera rapida y segura</Text>
          <InputComponent placeholder='Correo' keyboardType='email-address'/>
          <InputComponent placeholder='Contraseña' keyboardType='default'/>
        
        
        </BodyComponents>

    </View>
  )
}

export default LogisScreen
