import React ,{Component} from 'react';
import Todos from './Todos'
import AppTodo from './AddTodo'
class App extends Component {
  state={
    todos:[
      {id:1,content:'Buy Some Milk'},
      {id:2,content:'Wash clothes'},
      {id:3,content:'Smoke a Joint'}
    ]
  }
  AddTodo =(todo)=>
  {
todo.id=Math.random();
let todos1=[...this.state.todos,todo]
this.setState(
  {
    todos:todos1
  }
)
  }
  deleteTodo = (id) =>  
  {
const todos1=this.state.todos.filter(todo=>{
  return todo.id !== id
});
this.setState({
  todos:todos1
})
  }
  render(){
  return (
    <div className="Todo App container">
     <h1 className="center blue-text">Todo's</h1>
     <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
     <AppTodo AddTodo={this.AddTodo}/>
    </div>
  );
}
}
export default App;
