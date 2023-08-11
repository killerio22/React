import React from 'react';
import {useDispatch} from "react-redux";
import {carActions} from "../../../redux";

const Car = ({car}) => {
    const dispatch = useDispatch();
    const {id, brand, price, year} = car;

    const handleUpdateClick = () => {
        dispatch(carActions.setCarForUpdate(car));
    };

    const handleDeleteClick = () => {
        dispatch(carActions.deleteCar(id))
    }

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={handleUpdateClick}>update</button>
            <button onClick={handleDeleteClick}>delete</button>
        </div>
    );
};

export default Car;