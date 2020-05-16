import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import Marketplace from './MarketplaceComponent';
import MarketInfo from './MarketInfoComponent';
import { MARKETPLACE } from '../shared/marketplace';
import { createStackNavigator } from 'react-navigation';


const DirectoryNavigator = createStackNavigator(
    {
        Marketplace: { screen: Marketplace },
        MarketInfo: { screen: MarketInfo }
    }, 
    {
        initialRouteName: 'Marketplace',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

class Main extends Component {
    render() {
        return (
        <View style={{ 
            flex: 1, 
            paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
            }}>
            <DirectoryNavigator />
        </View>
        )}
}

export default Main;