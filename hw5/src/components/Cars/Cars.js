import React, { useEffect, useState } from 'react';
import { Car } from './Car';
import { useCarService} from "../services/carService";

const Cars = ({ onSave, setOnSave, setCarForUpdate, getCars }) => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        getCars()
            .then((value) => setCars(value))
            .catch((error) => console.log('Помилка отримання списку автомобілів:', error));
    }, [onSave]);

    return (
        <div>
            {cars.map((car) => (
                <Car key={car.id} car={car} setOnSave={setOnSave} setCarForUpdate={setCarForUpdate} />
            ))}
        </div>
    );
};

export { Cars };
