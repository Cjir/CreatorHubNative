import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { MARKETPLACE } from '../shared/marketplace'

function RenderMarket({market}) {   
    if (market) {
        return (
            <Card
                featuredTitle={market.name}
                image={require('./images/coffeestudy.jpg')}>
                <Text style={{margin: 10}}>
                    {market.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class MarketInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marketplace: MARKETPLACE
        }
    }

    static navigationOptions = {
        title: 'Market Info'
    }

    render () {
        const marketId = this.props.navigation.getParam('marketplaceId');
        const market = this.state.marketplace.filter(market => market.id === marketId)[0];
        return <RenderMarket market={market} />;
    }
}

export default MarketInfo;