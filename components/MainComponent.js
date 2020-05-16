import React, { Component } from 'react';
import Marketplace from './MarketplaceComponent';
import { MARKETPLACE } from '../shared/marketplace';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          marketplace: MARKETPLACE
        };
    }

    render() {
        return <Marketplace marketplace={this.state.marketplace} />;
    }
}

export default Main;