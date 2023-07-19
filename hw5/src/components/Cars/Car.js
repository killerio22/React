import React from 'react';
import { useCarService } from '../services/carService';

const Car = ({ car, setOnSave, setCarForUpdate }) => {
    const { id, brand, price, year } = car;
    const { deleteCar } = useCarService();

    const handleDelete = () => {
        deleteCar(id)
            .then(() => {
                setOnSave((prev) => !prev);
            })
            .catch((error) => {
                console.log('Помилка при видаленні автомобіля:', error);
            });
    };

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => setCarForUpdate(car)}>Оновити</button>
            <button onClick={handleDelete}>Видалити</button>
        </div>
    );
};

export { Car };
