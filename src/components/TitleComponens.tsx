import React from 'react'
import { Text, useWindowDimensions } from 'react-native'
import { styles } from '../theme/appTheme'

//DEFINIR LA INTERFAZ DE LAS PROPS
interface Props {
    title: string;
}
export const TitleComponens = ({title}:Props) => {
  const {height} = useWindowDimensions();
  return (
    <Text style={{...styles.title, height: height*0.12}}>{title}</Text>
  )
}

export default TitleComponens
