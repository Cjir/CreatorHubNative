import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import Home from './HomeComponent';
import BlogFeed from './BlogFeedComponent';
import BlogPage from './BlogPageComponent';
import Marketplace from './MarketplaceComponent';
import MarketInfo from './MarketInfoComponent';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';


const MarketplaceNavigator = createStackNavigator(
    {
        Marketplace: { screen: Marketplace },
        MarketInfo: { screen: MarketInfo }
    }, 
    {
        initialRouteName: 'Marketplace',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#ff9b71'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const BlogFeedNavigator = createStackNavigator(
    {
        BlogFeed: { screen: BlogFeed },
        BlogPage: { screen: BlogPage }
    }, 
    {
        initialRouteName: 'BlogFeed',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#ff9b71'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const HomeNavigator = createStackNavigator(
    {   
        Home: { screen: Home }
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#ff9b71'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        Marketplace: { screen: MarketplaceNavigator },
        BlogFeed: { screen: BlogFeedNavigator }
    },
    {
        drawerBackgroundColor: '#F9FAFC'
    }
);

class Main extends Component {
    render() {
        return (
        <View style={{ 
            flex: 1, 
            paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
            }}>
            <MainNavigator />
        </View>
        )}
}

export default Main;