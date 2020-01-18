import React from 'react';
import { Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import { MaterialIcons } from '@expo/vector-icons';

import Dashboard from './pages/Dashboard';
import Search from './pages/Search';
import Requests from './pages/Requests';
import Profile from './pages/Profile';


const Routes = createAppContainer(
  createBottomTabNavigator({
    Início: {
      screen: createStackNavigator({
        Dashboard,
      }, {
        defaultNavigationOptions: {
         
        },
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <MaterialIcons name="home" size={30} color={tintColor} />
          ),
        }
      })
    },
    Busca: {
      screen: createStackNavigator({
        Search,
      }, {
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <MaterialIcons name="search" size={30} color={tintColor} />
          ),
        }
      })
    },
    Pedidos: {
      screen: createStackNavigator({
        Requests,
      }, {
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <MaterialIcons name="assignment" size={30} color={tintColor} />
          ),
        }
      })
    },
    Perfil: {
      screen: createStackNavigator({
        Profile,
      }, {
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <MaterialIcons name="person" size={30} color={tintColor} />
          ),
        }
      })
    }
  }, {
    tabBarOptions: {
      activeTintColor: "#333",
      inactiveTintColor: 'gray'
    }
  })
)

export default Routes;