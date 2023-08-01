import React, { Component } from 'react';
import axios from 'axios';

class Posts extends Component {
    state = {
        posts: []
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({ posts: response.data });
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
            });
    }

    render() {
        const { posts } = this.state;
        return (
            <div>
                <h2 style={{color:'darkgoldenrod'}}>Posts</h2>
                <ul>
                    {posts.map(post => (
                        <p key={post.id}>
                            <h4 style={{color:'darkblue'}}>ID: {post.id}</h4>
                            <h3 style={{color:'darkcyan'}}>{post.title}</h3>
                            <h3 style={{color:'darkcyan'}}>{post.body}</h3>
                        </p>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Posts;
