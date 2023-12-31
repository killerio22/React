import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../../redux";

const CarForm = () => {
    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state.cars);
    const {register, reset, setValue, handleSubmit} = useForm();

    if(carForUpdate){
        setValue('brand', carForUpdate.brand)
        setValue('price', carForUpdate.price)
        setValue('year', carForUpdate.year)
    }

    const save = async (car) => {
      await dispatch(carActions.create(car))
        reset()
    }


    const update = async (car) =>{
        await dispatch(carActions.update(carForUpdate.id, car))
        reset()
    }
    return (
        <form onSubmit={handleSubmit(carForUpdate?update:save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>{carForUpdate?'update':'save'}</button>
        </form>
    );
};

export default CarForm;