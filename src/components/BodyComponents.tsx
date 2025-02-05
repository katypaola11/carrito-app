import React, { ReactNode } from 'react'
import { View, Text, useWindowDimensions } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props {
  children: ReactNode; //permite que el componente reciba cualquier elemento
}

export const BodyComponents = ({children}:Props) => {
    //hook useWindowDimensions
    const {height} = useWindowDimensions();
  return (
   <View style={{...styles.body, height: height*0.88}}>
   {children}
   </View>
  )
}

export default BodyComponents
