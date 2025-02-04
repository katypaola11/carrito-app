import React from 'react'
import { TextInput, KeyboardTypeOptions } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props {
        placeholder?: string;
        keyboardType?: KeyboardTypeOptions; // Define el tipo de teclado
    }

export const InputComponent = ({placeholder, keyboardType}:Props) => {
    
  return (
   <TextInput placeholder={placeholder} keyboardType={keyboardType} style={{...styles.inputText}}/>
   //ahora la contraseña se debe ocultar
  
  )
}

export default InputComponent
