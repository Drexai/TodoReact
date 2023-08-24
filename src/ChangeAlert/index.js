import React from "react";
import { useStorageListener } from "./useStorageListener";
import "./showSincronize.css";

export const ChangeAlert = ({sincronize}) => {
    const {show, toggleShow} = useStorageListener(sincronize);

    if(show){
        return (
            <div className="showContainer">
                <p className="showText">Hubo Cambios</p>
                <button className="showButton" onClick={() => toggleShow(false)} >
                Volver a cargar la información
                </button>
            </div>
        )
    }  else {
        return null
    }
}
