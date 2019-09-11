import React from "react"
import TodoItem from "./TodoItem"
import todoData from "./TodoData"

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            todos: todoData
        }
        this.HandleChange = this.HandleChange.bind(this)
    }

    HandleChange(id){
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id){
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }

    render(){
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} HandleChange={this.HandleChange}/> )
        return(
            <div className="todo-data">
                {todoItems}
            </div>
        )
    }
}

export default App