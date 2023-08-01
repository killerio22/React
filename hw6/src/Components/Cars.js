import React, { Component } from 'react';
import axios from 'axios';

class Cars extends Component {
    state = {
        cars: []
    };

    componentDidMount() {
        axios.get('http://owu.linkpc.net/carsAPI/v1/cars')
            .then(response => {
                this.setState({ cars: response.data });
            })
            .catch(error => {
                console.error('Error fetching cars:', error);
            });
    }

    render() {
        const { cars } = this.state;
        return (
            <div>
                <h2 style={{color:'darkgoldenrod'}}>Cars</h2>
                <ul>
                    {cars.map(car => (
                        <p key={car.id}>
                            <h4 style={{color:'darkblue'}}>ID: {car.id}</h4>
                            <h3 style={{color:'darkcyan'}}>BRAND: {car.brand}</h3>
                            <h3 style={{color:'darkcyan'}}>PRICE: {car.price}</h3>
                            <h3 style={{color:'darkcyan'}}>YEAR: {car.year}</h3>
                        </p>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Cars;
