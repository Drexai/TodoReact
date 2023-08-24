import React from "react";
import "./CreateTodoButton.css";
import {FaRegMehRollingEyes} from "react-icons/fa"

export const CreateTodoButton = (props) => {

    const onClickButton = () =>{
        props.setOpenModal(true);       
    }
   
    return (
        <button className="CreateTodoButton" onClick={onClickButton}>
            <FaRegMehRollingEyes className="close" />
        </button>
    );
}
