import {Cars} from "./Cars";
import {CarForm} from "./CarForm";
import {useState} from "react";

const CarContainer = () => {
    const [onSave, setOnSave] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null);
    return (
        <div>
            <CarForm setOnSave={setOnSave} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            <Cars onSave={onSave} setOnSave={setOnSave} setCarForUpdate={setCarForUpdate}/>
        </div>
    )
}

export {CarContainer};