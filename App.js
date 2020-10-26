/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Image,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

// screens
import { Onboarding, DestinationDetail } from "./screens/";
//Tabs
import Tabs from "./navigation/tabs";
// extra screens


import { icons, COLORS, SIZES } from './constants';

const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};


const App = () => {
  return (


    < NavigationContainer theme={theme} >
      <Stack.Navigator
        initialRouteName={'Onboarding'}
      >
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            title: null,
            headerStyle: {
              backgroundColor: COLORS.white
            },
            headerLeft: null,
            headerRight: () => (
              <TouchableOpacity
                style={{ marginRight: SIZES.padding }}
                onPress={() => console.log("Pressed")}
              >
                <Image
                  source={icons.barMenu}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
              </TouchableOpacity>
            ),
          }}
        />


        {/* Tabs */}
        <Stack.Screen
          name="Home"
          component={Tabs}
        >

        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer >


  );
};




export default App;
