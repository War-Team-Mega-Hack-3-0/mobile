import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../screens'

export const NotAuthenticatedNavigate: React.FC = () => {
  const StackNavigator = createStackNavigator()
  return (
    <NavigationContainer>
      <StackNavigator.Navigator initialRouteName="login" headerMode="none">
        <StackNavigator.Screen name="login" component={Home} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  )
}
