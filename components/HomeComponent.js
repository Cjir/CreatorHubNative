import React, { Component } from 'react';
import { Image, ScrollView, Text } from 'react-native';
import { Card, CardTitle, CardBody, ListItem, View } from 'react-native-elements';
import { BLOGFEED } from '../shared/blogfeed';
import { MARKETPLACE } from '../shared/marketplace';
import { PROFILE } from '../shared/profile';
import { TASK } from '../shared/taskmanager';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            marketplace: MARKETPLACE,
            blogfeed: BLOGFEED,
            profile: PROFILE,
            task: TASK
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
                        image={require('./images/black-and-white-clay.jpg')}>
                        <Text
                            style={{ margin: 10 }}>
                            {item.description}
                        </Text>
                    </Card>
                );
            }
            return <View />;
        };

        const RenderProfile = ({ item }) => {
            if (item) {
                return (
                    <Card title='Profile'>
                        <Image
                            style={{
                                alignSelf: 'center',
                                resizeMode: "cover",
                                height: 150,
                                width: 150
                            }}
                            source={require("./images/profile.png")} />
                        <Text
                            style={{
                                alignSelf: 'center',
                                marginTop: 20,
                                marginRight: 10,
                                marginLeft: 10
                            }}>
                            {item.name}
                        </Text>
                        <Text
                            style={{
                                alignSelf: 'center',
                                margin: 10
                            }}>
                            {item.description}
                        </Text>
                    </Card>
                );
            }
            return <View />;
        };

        const RenderTask = ({ item }) => {
            if (item) {
                return (
                    <Card>
                        {
                            task.map((l, i) => (
                                <ListItem
                                    key={i}
                                    leftAvatar={{ source: { uri: l.avatar_url } }}
                                    title={l.name}
                                    subtitle={l.subtitle}
                                    bottomDivider
                                />
                            ))
                        }
                    </Card>
                )
            }
        }

        const list = [
            {
                name: 'Write a blog',
                icon: 'subject',
            },
            {
                name: 'Sale your Creation',
                icon: 'attach-money',
            },
            {
                name: 'Video Update',
                icon: 'play-circle-outline',
            }
        ]

        return (

            <ScrollView>
                <RenderProfile
                    item={this.state.profile.filter(profileTitle => profileTitle.featured)[0]} />
                <Card
                    title="Ideas Begin Here">
                    {list.map((l, i) => (
                        <ListItem
                            key={i}
                            leftIcon={{ name: l.icon }}
                            title={l.name}
                            bottomDivider
                            chevron
                        >
                        </ListItem>
                    ))}
                </Card>
                <RenderItem
                    item={this.state.marketplace.filter(market => market.featured)[0]} />
                <RenderItem
                    item={this.state.blogfeed.filter(blog => blog.featured)[0]} />
            </ScrollView>
        );
    }
}

export default Home;