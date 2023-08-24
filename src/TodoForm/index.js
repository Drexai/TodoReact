import React from "react";
import './TodoForm.css';

export const TodoForm = ({addTodo, setOpenModal}) =>{

    const [newTodoValue, setNewTodoValue] = React.useState("");


    const onChange = (e) =>{
        setNewTodoValue(e.target.value );

    };

    const onCancel = () =>{
        setOpenModal(false)
    };


    const onSubmit = (e) =>{
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return(
        <form onSubmit={onSubmit}>
            <label></label>
            <textarea 
            value = {newTodoValue}
            onChange={onChange}
            placeholder="Escribe tu TODO"
            />
            <div className="buttonContainer">
                <button 
                        className="addButton"
                        type="button"
                        onClick={onCancel}>
                    Cancelar

                </button>

                <button className="addButton" type="submit"> 
     
                    Añadir
                </button>
            </div>


        </form>
    )
}