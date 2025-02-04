import { StyleSheet } from "react-native";
import { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR,INPUT_COLOR } from "./commons/constants";

export const styles = StyleSheet.create({
    body: {
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    }, 
    title: {
        color: 'white',
        fontSize: 27,
        paddingHorizontal: 30,
        paddingVertical: 30,
    },
    titlePrincipal: {
        fontSize: 17,
        fontWeight: 'bold',
        color:TERTIARY_COLOR,
        paddingHorizontal: 30,
        paddingVertical: 30,
    },
    title2: {
        color: TERTIARY_COLOR,
        fontSize: 15,
        paddingHorizontal: 15,
    },
    inputText: {
        backgroundColor: INPUT_COLOR,
        width:'95%',
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 10,
      
    },

})