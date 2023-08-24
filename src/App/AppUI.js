import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoHeader } from "../TodoHeader"
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import {Modal} from "../Modal"
import { TodoForm } from "../TodoForm";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";



export const AppUI = () => {
  const {
    error,
    loading,
    totalTodos,
    searchValue,
    searchedTodos,
    completedTodos,
    setSearchValue,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext)

  return (
    <>
      <TodoHeader>
        <TodoCounter
            totalTodos={totalTodos}
            completedTodos={completedTodos}
          />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
      </TodoHeader>
      
      <TodoList>
        {error && <TodosError  error={error} />}
        {loading && <TodosLoading/>}
        {(!loading && !searchedTodos.length) && <EmptyTodos/> }

        {searchedTodos.map(todo => (

          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}

      </TodoList>

          {!!openModal && (
            <Modal>
            
            <TodoForm/>
                        
            </Modal>
          )}
      
      <CreateTodoButton
      setOpenModal={setOpenModal}
      />
    </>
  )
}