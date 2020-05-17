import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { BLOGFEED } from '../shared/blogfeed';

class BlogFeed extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blogfeed: BLOGFEED
        }
    }

    static navigationOptions = {
        title: 'Blogfeed'
    }

    render() {

        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({ item }) => {
            return (
                <ListItem
                    title={item.title}
                    subtitle={item.description}
                    onPress={() => navigate('BlogPage', {blogId: item.id})}
                    leftAvatar={{ source: require('./images/workplace.png') }}
                />
            );
        };

        return (
            <FlatList
                data={this.state.blogfeed}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default BlogFeed;