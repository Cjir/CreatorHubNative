import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { BLOGFEED } from '../shared/blogfeed';
import { MARKETPLACE } from '../shared/marketplace';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            marketplace: MARKETPLACE,
            blogfeed: BLOGFEED
        }
    }

    static navigationOptions = {
        title: 'Home'
    }

    render() {

        const RenderItem = ({ item }) => {
            if (item) {
                return (
                    <Card
                        featuredTitle={item.title}
                        image={require('./images/creatorlogo.png')}>
                        <Text
                            style={{ margin: 10 }}>
                            {item.description}
                        </Text>
                    </Card>
                );
            }
            return <View />;
        };

        return (
            <ScrollView>
                <RenderItem
                    item={this.state.marketplace.filter(market => market.featured)[0]} />
                <RenderItem
                    item={this.state.blogfeed.filter(blog => blog.featured)[0]} />
            </ScrollView>
        );
    }
}

export default Home;