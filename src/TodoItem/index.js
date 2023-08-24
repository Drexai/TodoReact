import React from "react";
import "./TodoItem.css";
import {AiOutlineDelete} from "react-icons/ai"
import {FaRegCalendarCheck} from "react-icons/fa"


//<li className={`TodoItem ${props.loading? 'todoItemLoading' : ''}`}></li>

const TodoItem = (props) => {
    return (
        <li>
            <p className={`TodoItem ${props.completed && 'checkedText'}`}>{props.text} </p>
            <div className="inputContainer">

                <button type="button" className="buttonIcon" onClick={props.onComplete}>
                    <FaRegCalendarCheck type="button" className={`check ${props.completed && 'checked'}`}/>    
                </button>
 
                <button type="button" className="buttonIcon">
                    <AiOutlineDelete className="icon" 
                     onClick={props.onDelete}/>
                </button>
            </div>
            
        </li>
    );
}



export  {TodoItem};