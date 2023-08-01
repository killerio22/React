import React, { Component } from 'react';
import axios from 'axios';

class Comments extends Component {
    state = {
        comments: []
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(response => {
                this.setState({ comments: response.data });
            })
            .catch(error => {
                console.error('Error fetching comments:', error);
            });
    }

    render() {
        const { comments } = this.state;
        return (
            <div>
                <h2 style={{color:'darkgoldenrod'}}>Comments</h2>
                <ul>
                    {comments.map(comment => (
                        <p key={comment.id}>
                            <h4 style={{color:'darkblue'}}>ID: {comment.id}</h4>
                            <h3 style={{color:'darkcyan'}}>{comment.name}</h3>
                            <h3 style={{color:'darkcyan'}}>{comment.body}</h3>
                        </p>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Comments;
