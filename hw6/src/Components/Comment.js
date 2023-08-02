import React, {Component} from 'react';

class Comment extends Component {
    render() {
        const {id, name, email} = this.props.comment;
        return (
            <div>
                <div style={{color: 'darkcyan', fontWeight:'bolder'}}>id: {id}</div>
                <div style={{color: 'grey', fontWeight:'bolder'}}>name: {name}</div>
                <div style={{color: 'grey', fontWeight:'bolder'}}>email: {email}</div>
            </div>
        );
    }
}

export {Comment};