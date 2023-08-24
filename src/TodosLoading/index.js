import React from "react";
import './todosLoading.css';
import {AiFillDelete} from "react-icons/ai"
import {MdIncompleteCircle} from "react-icons/md"

export const TodosLoading = () => {
   return (
    <div className="loadingIcon">
        <span className="loadingIconComplete"> <MdIncompleteCircle/></span>
        <p className="loadingText">Estamos cargando, gracias por tu paciencia!</p>
        <span className="loadingDelete"><AiFillDelete/></span>
   </div>
   )
}