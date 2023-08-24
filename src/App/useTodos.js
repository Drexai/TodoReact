import React from "react";
import { useLocalStorage } from "./useLocalStorage";


const useTodos= () =>{

    const{ 
        item: Todos,
        saveItem: saveTodos,
        sincronizeItem: sincronizeTodos,
        loading, 
        error,
      
      } = useLocalStorage("TODOS_V1", []);
    
      const [searchValue, setSearchValue] = React.useState("");
      const [openModal,setOpenModal] = React.useState(false);


      const completedTodos = Todos.filter(todo => !!todo.completed).length;
      const totalTodos = Todos.length;
    
      let searchedTodos = [];
    
      if(!searchValue.length >= 1) {
        searchedTodos = Todos;
      } else {
        searchedTodos = Todos.filter(todo => {
          const todoText = todo.text.toLowerCase()
          const searchText = searchValue.toLowerCase()
    
          return todoText.includes(searchText);
        })
      }
    
      const addTodo = (text) => { 
        const newTodos = [...Todos];
        newTodos.push({
          completed: false,
          text
        }) 
        saveTodos(newTodos);
      }

          
      const completeTodo = (text) => { 
        const todoIndex = Todos.findIndex(todo => todo.text === text);
        const newTodos = [...Todos];
    
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
      }
    
    
      const deleteTodo = (text) => { 
        const todoIndex = Todos.findIndex(todo => todo.text === text);
        const newTodos = [...Todos];
    
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      }



    return(
      {
        error,
        loading,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        addTodo,
        deleteTodo,
        openModal,
        setOpenModal,   
        sincronizeTodos,
      });    
}


export{ useTodos };