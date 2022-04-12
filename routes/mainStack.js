import {createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/home'
import Login from '../screens/login'
import Register from '../screens/register'
import Upload from '../screens/upload'
import TabNavigator from "../routes/tabNavigation"

const Stack = createNativeStackNavigator()

export default function Navigator(){
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Register" component={Register}/>
                <Stack.Screen name="Upload" component={Upload}/>
                <Stack.Screen name="Dashboard" component={TabNavigator}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}