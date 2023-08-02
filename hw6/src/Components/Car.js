import React, {Component} from 'react';

class Car extends Component {
    render() {
        const {id, brand, price, year} = this.props.car;
        return (
            <div>
                <div style={{color: 'darkcyan', fontWeight:'bolder'}}>id: {id}</div>
                <div style={{color: 'grey', fontWeight:'bolder'}}>brand: {brand}</div>
                <div style={{color: 'grey', fontWeight:'bolder'}}>price: {price}</div>
                <div style={{color: 'grey', fontWeight:'bolder'}}>year: {year}</div>
            </div>
        );
    }
}

export {Car};