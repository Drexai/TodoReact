//import './App.css';
import React from "react";
import { useTodos } from "./useTodos";
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
import { ChangeAlert } from "../ChangeAlert";



const App = () => {
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
    addTodo,
    sincronizeTodos,
  } = useTodos();

  return (
    <>
      <TodoHeader>
        <TodoCounter
            totalTodos={totalTodos}
            completedTodos={completedTodos}
            loading={loading}
          />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            loading={loading}
          />
      </TodoHeader>

    
      <TodoList
        error = {(error)}
        loading = {(loading)}
        totalTodos={totalTodos}
        searchedTodos = {(searchedTodos)}
        searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() =><TodosLoading/>}
        onEmptyTodos={() =><EmptyTodos/>}
        onEmptySearchResult={
          (searchText) => <p>No hay resultados para {searchText}</p>
        }
      >
        {todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>
          {!!openModal && (
            <Modal>
              <TodoForm 
                addTodo={addTodo}
                setOpenModal={setOpenModal}
              /> 
            </Modal>
          )}
    
      <CreateTodoButton
      setOpenModal={setOpenModal}
      />

      <ChangeAlert
        sincronize={sincronizeTodos}
      />
    </>
  )
}

export default App;
