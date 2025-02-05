import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from '../theme/appTheme'
interface Props {
    title: string;
    ChangeLogin : () => void;   
}
export const ButtonComponent = ({title,ChangeLogin}:Props) => {
  return (
    <TouchableOpacity  style={styles.buttonForm} onPress={ChangeLogin}> 
        <Text style={styles.buttonFormText}>Enviar</Text>
    </TouchableOpacity>
  )
}


