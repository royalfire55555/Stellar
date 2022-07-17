import * as React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import DailyPic from "./screens/DailyPic";
import Spacecrafts from "./screens/Spacecrafts";
import StarMap from "./screens/StarMap";
import HomeScreen from "./screens/HomeScreen";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                intialRouteName="Home"
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
                <Stack.Screen
                    name="Daily Pic"
                    component={DailyPic}
                ></Stack.Screen>
                <Stack.Screen
                    name="Spacecrafts"
                    component={Spacecrafts}
                ></Stack.Screen>
                <Stack.Screen
                    name="Star Map"
                    component={StarMap}
                ></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
