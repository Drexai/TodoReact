import React from "react";
import "./TodoList.css";


function TodoList(props) {  

    return (
        <section>
            <ul>
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
            {(!props.loading && !props.searchedTodos.length) && props.onEmptySearchResult(props.searchText)}
            {(!props.loading && !props.error ) && props.searchedTodos.map(props.render || props.children)}
            </ul>
        </section>
    );
}


export  {TodoList};