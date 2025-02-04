import { createStackNavigator } from "@react-navigation/stack";
import { LogisScreen } from "../screens/LogisScreen";
import { PRIMARY_COLOR } from "../theme/commons/constants";

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator  screenOptions={{cardStyle : {backgroundColor :PRIMARY_COLOR} }}>
            <Stack.Screen name="Login" options={{headerShown: false}} component={LogisScreen} />
        </Stack.Navigator>
    )
}