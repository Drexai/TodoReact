import React from "react";
import "./TodoSearch.css";

const TodoSearch = ({searchValue, setSearchValue, loading}) => {

    const onSearchValueChange = (event) =>{
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };


    return (
        <input type="search"
            className="TodoSearch"
            value={searchValue}
            onChange={onSearchValueChange}
            placeholder="Escribe una tarea"
            disabled={loading}
        />
    )
    ;
}


export  {TodoSearch};