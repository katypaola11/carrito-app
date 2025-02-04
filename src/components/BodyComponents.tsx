import React from 'react'
import { View, Text, useWindowDimensions } from 'react-native'
import { styles } from '../theme/appTheme'

export const BodyComponents = (props:any) => {
    //hook useWindowDimensions
    const {height} = useWindowDimensions();
  return (
   <View style={{...styles.body, height: height*0.88}}>
   {props.children}
   </View>
  )
}

export default BodyComponents
