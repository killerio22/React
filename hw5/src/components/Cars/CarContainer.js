import React, { useState } from 'react';
import { Cars } from './Cars';
import { CarForm } from './CarForm';
import { useCarService } from '../services/carService';

const CarContainer = () => {
    const { getCars } = useCarService();
    const [onSave, setOnSave] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null);

    return (
        <div>
            <CarForm setOnSave={setOnSave} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate} />
            <hr />
            <Cars onSave={onSave} setOnSave={setOnSave} setCarForUpdate={setCarForUpdate} getCars={getCars} />
        </div>
    );
};

export { CarContainer };
