import React , {useState} from "react";

const useInput = (initValue = "") => {
    const [value,setValue] = useState<string>(initValue);

    const changeHandler = (v:string) => {
        setValue(v);
    }

    const initializer = () => {
        setValue("");
    }

    return {
        value,
        changeHandler,
        initializer
    }
}

export default useInput;