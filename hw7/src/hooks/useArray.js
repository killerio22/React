import {useState} from "react";

const useArray=(defaultValue)=>{
    const [data, setData] = useState(Array.isArray(defaultValue)?defaultValue:[])

    const add = (item)=>{
        setData(prev=>[...prev,item])
    }

    const remove = (index) =>{
        setData(prev=>{
            prev.splice(index, 1)
            return [...prev]
        })
    }

    return {data, add, remove}
}

export default useArray