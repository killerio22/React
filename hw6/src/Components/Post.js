import React, {Component} from 'react';

class Post extends Component {
    render() {
        const {id, title, body} = this.props.post;
        return (
            <div>
                <div style={{color: 'darkcyan', fontWeight:'bolder'}}>id: {id}</div>
                <div style={{color: 'grey', fontWeight:'bolder'}}>title: {title}</div>
                <div style={{color: 'grey', fontWeight:'bolder'}}>body: {body}</div>
            </div>
        );
    }
}

export {Post};