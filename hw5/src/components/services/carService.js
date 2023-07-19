import axios from 'axios';

const CAR_API = 'http://owu.linkpc.net/carsAPI/v1/cars';

export const useCarService = () => {
    const getCars = async () => {
        const response = await axios.get(CAR_API);
        return response.data;
    };

    const createCar = async (car) => {
        const response = await axios.post(CAR_API, car, {
        });
        return response.data;
    };

    const updateCar = async (carId, car) => {
        const response = await axios.put(`${CAR_API}/${carId}`, car, {
        });
        return response.data;
    };

    const deleteCar = async (carId) => {
        const response = await axios.delete(`${CAR_API}/${carId}`);
        return response.data;
    };

    return {
        getCars,
        createCar,
        updateCar,
        deleteCar,
    };
};
