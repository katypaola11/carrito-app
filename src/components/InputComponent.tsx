import React from 'react'
import { TextInput, KeyboardTypeOptions } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props {
        placeholder: string;
        keyboardType?: KeyboardTypeOptions; // Define el tipo de teclado
        handleChange: (name: string, value: string) => void;
        name: string;
        isPassword?: boolean;
      }

export const InputComponent = ({placeholder, keyboardType='default',handleChange, isPassword=false, name}:Props) => {
    
  return (
   <TextInput placeholder={placeholder} keyboardType={keyboardType} secureTextEntry={isPassword} onChangeText={(value) => handleChange(name, value) }   style={{...styles.inputText}}/>
  
  )
}

