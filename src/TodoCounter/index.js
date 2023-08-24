import React from "react";
import "./TodoCounter.css";

const TodoCounter = ({totalTodos, completedTodos, loading}) => {
 
    return (
        <h2 className={'TodoCounter ${!!loading && "TodoCounterLoading"}'}>
        Has completado {completedTodos} de los {totalTodos} TODOs</h2>
    );
}


export  {TodoCounter};