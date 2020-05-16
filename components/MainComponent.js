import React, { Component } from 'react';
import { View } from 'react-native';
import Marketplace from './MarketplaceComponent';
import MarketInfo from './MarketInfoComponent';
import { MARKETPLACE } from '../shared/marketplace';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marketplace: MARKETPLACE,
            selectedMarketplace: null
        };
    }


    onMarketSelect(marketplaceId) {
        this.setState({ selectedMarketplace: marketplaceId });
    }

    render() {
        return (
        <View style={{ flex: 1 }}>
            <Marketplace marketplace={this.state.marketplace} onPress={marketplaceId => this.onMarketSelect(marketplaceId)} />
            <MarketInfo marketplace={this.state.marketplace.filter(marketplace => marketplace.id === this.state.selectedMarketplace)[0]} />
        </View>
        )}
}

export default Main;