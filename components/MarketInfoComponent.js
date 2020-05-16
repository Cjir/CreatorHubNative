import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

function RenderMarket({marketplace}) {   
    if (marketplace) {
        return (
            <Card
                featuredTitle={marketplace.name}
                image={require('./images/coffeestudy.jpg')}>
                <Text style={{margin: 10}}>
                    {marketplace.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

function MarketInfo(props) {
    return <RenderMarket marketplace={props.marketplace} />;
}

export default MarketInfo;