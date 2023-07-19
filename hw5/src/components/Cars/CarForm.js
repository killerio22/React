import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useCarService } from '../services/carService';

const CarForm = ({ setOnSave, carForUpdate, setCarForUpdate }) => {
    const {setValue} = useForm;
    const { createCar, updateCar } = useCarService();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ mode: 'onChange' });

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand);
            setValue('price', carForUpdate.price);
            setValue('year', carForUpdate.year);
        }
    }, [carForUpdate]);

    const handleSave = (data) => {
        createCar(data)
            .then((data) => {
                console.log(data);
                setOnSave((prev) => !prev);
                reset();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleUpdate = (car) => {
        updateCar(carForUpdate.id, car)
            .then(() => {
                setOnSave((prev) => !prev);
                setCarForUpdate(null);
                reset();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const onSubmit = (data) => {
        if (Object.keys(errors).length === 0) {
            if (!carForUpdate) {
                handleSave(data);
            } else {
                handleUpdate(data);
            }
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Brand:
                    <input
                        type="text"
                        placeholder="Бренд"
                        {...register('brand', {
                            required: 'Це поле обов\'язкове',
                            pattern: {
                                value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
                                message: 'Будь ласка, введіть правильний бренд (макс. 20 символів, лише букви)',
                            },
                        })}
                    />
                    {errors.brand && <span>{errors.brand.message}</span>}
                </label>
                <label>
                    Price:
                    <input
                        type="number"
                        placeholder="Ціна"
                        {...register('price', {
                            required: 'Це поле обов\'язкове',
                            min: {
                                value: 0,
                                message: 'Ціна повинна бути більше або дорівнювати 0',
                            },
                            max: {
                                value: 1000000,
                                message: 'Ціна повинна бути менше або дорівнювати 1000000',
                            },
                        })}
                    />
                    {errors.price && <span>{errors.price.message}</span>}
                </label>
                <label>
                    Year:
                    <input
                        type="number"
                        placeholder="Year"
                        {...register('year', {
                            required: 'Це поле обов\'язкове',
                            min: {
                                value: 1990,
                                message: 'Рік повинен бути більше або дорівнювати 1990',
                            },
                            max: {
                                value: 2023,
                                message: 'Рік повинен бути менше або дорівнювати 2023',
                            },
                        })}
                    />
                    {errors.year && <span>{errors.year.message}</span>}
                </label>
                <button type="submit">{!carForUpdate ? 'Save' : 'Update'}</button>
            </form>
        </div>
    );
};

export { CarForm };
