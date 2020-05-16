import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { MARKETPLACE } from '../shared/marketplace'

class Marketplace extends Component {

    constructor(props) {
        super(props);
        this.state = {
            marketplace: MARKETPLACE
        }
    }

    static navigationOptions = {
        title: 'Marketplace'
    }

    render() {

        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({ item }) => {
            return (
                <ListItem
                    title={item.title}
                    subtitle={item.description}
                    onPress={() => navigate('MarketInfo', {marketplaceId: item.id})}
                    leftAvatar={{ source: require('./images/coffeestudy.jpg') }}
                />
            );
        };

        return (
            <FlatList
                data={this.state.marketplace}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default Marketplace;