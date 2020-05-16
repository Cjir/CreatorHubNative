import React from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

function Marketplace(props) {

    const renderDirectoryItem = ({item}) => {
        return (
            <ListItem
                title={item.name}
                subtitle={item.description}
                onPress={() => props.onPress(item.id)}
                leftAvatar={{ source: require('./images/coffeestudy.jpg')}}
            />
        );
    };

    return (
        <FlatList 
            data={props.marketplace}
            renderItem={renderDirectoryItem}
            keyExtractor={item => item.id.toString()}
        />
    );
}

export default Marketplace;