import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";

const CarForm = ({ setOnSave, carForUpdate, setCarForUpdate}) => {
    const { register, handleSubmit, setValue, formState: { errors, isValid } } = useForm();
    useEffect(()=>{
        if(carForUpdate){
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate])

    const save = (data) => {
        fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data),
            method: 'POST'
        }).then(response => {
            if (!response.ok) {
                throw Error(response.status + ' not ok');
            }
            return response.json();
        })
            .then(data => {
                console.log(data);
                setOnSave(prev => !prev);
            })
            .catch(e => {
                console.log(e);
            });
    };

    
    const update = (car) => {
      fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${carForUpdate.id}`,
          {
              headers:{'content-type':'application/json'},
              method:'PUT',
              body:JSON.stringify(car)
          }).then(value => value.json()).then(()=>{
              setOnSave(prev=>!prev)
          setCarForUpdate(null)
      })
    }
    
    return <div>
        <form onSubmit={handleSubmit(!carForUpdate?save:update)}>
            <label><input type="text" placeholder={'brand'} {...register('brand')} /></label>
            <label><input type="text" placeholder={'price'} {...register('price')} /></label>
            <label><input type="text" placeholder={'year'} {...register('year')} /></label>
            <button type="submit">{!carForUpdate?'Save':'Update'}</button>
        </form>
    </div>;
};

export { CarForm };
