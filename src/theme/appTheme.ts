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
        fontWeight: 'bold',
        textAlign: 'center'
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
        marginTop: 7
    },
    inputText: {
        backgroundColor: INPUT_COLOR,
        width:'95%',
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 10, 
    },
    containerForm: {
        marginVertical: 20,
    },
    buttonForm: {
        backgroundColor: PRIMARY_COLOR,
        borderRadius: 10,
        marginVertical: 20,
        marginHorizontal: 10,
    },
    buttonFormText: {
        color: SECONDARY_COLOR,
        textAlign: 'center',
        padding: 15,
        fontWeight: 'bold',
        fontSize: 17,
    },
    iconPassword: {
        position: 'absolute',
        right: 10,
        bottom: 17
    },

})