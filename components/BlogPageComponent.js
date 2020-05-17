import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { BLOGFEED } from '../shared/blogfeed';

function RenderBlogHeader({ blog }) {
    if (blog) {
        return (
            <Card
                featuredTitle={blog.title}
                image={require('./images/coffeestudy.jpg')}>
                <Text
                    style={{
                        margin: 10,
                        fontSize: 24
                    }}
                    bottomDivider
                >
                    {blog.description}
                </Text>
                <Text
                    style={{ margin: 10 }}
                    bottomDivider
                >
                    {blog.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

function RenderBlogPage({ blog }) {
    if (blog) {
        return (
            <Card
                title={blog.quote}
                style={{ fontStyle: 600 }}
            >
                <Text
                    style={{
                        fontSize: 10
                    }}
                >
                    {blog.date}
                </Text>
                <Text
                    style={{
                        fontSize: 10
                    }}
                    bottomDivider
                >
                    {blog.time}
                </Text>
                <Text
                    style={{ 
                        margin: 10,
                        lineHeight: 20,
                        fontSize: 14
                    }}
                    bottomDivider
                >
                    Voldemort moved slowly forward and turned to face Harry. He raised his wand. "Crucio!" It was
                    pain beyond anything Harry had ever experienced; his very bones were on fire; his head was
                    surely splitting along his scar; his eyes were rolling madly in his head; he wanted it to end
                    ... to black out... to die ... And then it was gone. He was hanging limply in the ropes binding
                    him to the headstone of Voldemort's father, looking up into those bright red eyes through a kind
                    of mist. The night was ringing with the sound of the Death Eaters' laughter. "You see, I think,
                    how foolish it was to suppose that this boy could ever have been stronger than me," said
                    Voldemort. "But I want there to be no mistake in anybody's mind. Harry Potter escaped me by a
                    lucky chance. And I am now going to prove my power by killing him, here and now, in front of you
                    all, when there is no Dumbledore to help him, and no mother to die for him. I will give him his
                    chance. He will be allowed to fight, and you will be left in no doubt which of us is the
                    stronger. Just a little longer, Nagini," he whispered, and the snake glided away through the
                    grass to where the Death Eaters stood watching.
                </Text>
            </Card>
        );
    }
    return <View />;
}



class BlogPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogfeed: BLOGFEED
        }
    }

    static navigationOptions = {
        title: 'Blog Page'
    }

    render() {
        const blogId = this.props.navigation.getParam('blogId');
        const blog = this.state.blogfeed.filter(blog => blog.id === blogId)[0];
        return (
            <ScrollView>
                <RenderBlogHeader blog={blog} />
                <RenderBlogPage blog={blog} />
            </ScrollView>
        )
    }
}

export default BlogPage;