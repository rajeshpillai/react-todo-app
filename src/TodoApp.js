import React from 'react';
import $ from 'jquery'; 

import AddTodo from './Components/AddTodo';
import TodoList from './Components/TodoList';

class TodoApp extends React.Component{
  constructor(props){
    super(props);
    this.state={
      todoList:[
          {"name":"Build an ecommerce app", completed: false},
          {"name":"Create a todo app", completed: true}            
        ]
      }
      this.addTodo = this.addTodo.bind(this);
      this.deleteTodo = this.deleteTodo.bind(this);
      this.editTodo = this.editTodo.bind(this);
      this.saveTodo = this.saveTodo.bind(this);
      this.cancelTodo = this.cancelTodo.bind(this);
      this.toggle = this.toggle.bind(this);
    }

  getInitialState() {
    console.log("TodoApp: getInitialState...");
    return {
      todoList:[
          {"name":"Build an ecommerce app"},
          {"name":"Create a todo app"}            
        ]
    }
  }

  componentWillMount () {
    console.log("TodoApp: componentWillMount...");
  }

  
  componentDidMount () {
    console.log("TodoApp: componentDidMount...");
  }

  componentWillUnmount() {
    console.log("TodoApp: componentWillUnmount...");
  }

  componentDidUpdate() {
    console.log("TodoApp: componentDidUpdate...");
  }

  componentWillReceiveProps() {
    console.log("TodoApp: componentWillReceiveProps...");
  }

  shouldComponentUpdate() {
    console.log("TodoApp: componentWillReceiveProps...");
    return true;
  }

  addTodo(todo){   
    const {todoList} = this.state;
    ///var list = this.state.todoList;
    //list.push({name: todo});
    
    console.log("todos: ", todoList);

    //this.setState({todoList: list});       
    this.setState({
      todoList: todoList.concat({name: todo})
    })
  }

  deleteTodo(id){
     var list = this.state.todoList;
      if (id > -1) {
        list.splice(id, 1);
      }
    this.setState({todoList: list});
  };

  editTodo(id){
    var list = this.state.todoList;
    $.each(list,function(i,item){
      item["isInEditMode"]= false;
    })
    var editableTodo = list[id];
    editableTodo["isInEditMode"]= true;
    this.setState({todoList: list});
  };

  // Save todo
  saveTodo(id,newTodo){  
     var list = this.state.todoList;
      if (id > -1) {
        list[id]["name"] =newTodo;
        list[id]["isInEditMode"] = false;
      } 
    this.setState({todoList: list}); 
  };

  // Cancel edit mode
  cancelTodo(id){  
     var list = this.state.todoList;
      if (id > -1) {       
        list[id]["isInEditMode"] = false;
      } 
    this.setState({todoList: list});  
  };

  toggle(todo) {
    console.log(this.state);
    var todos = this.state.todoList;
    todos.map(function (item) {
      if (item == todo) {
        item.completed = !todo.completed;    
      }
    });

    this.setState({ todoList: todos});

  }

  render(){
    return(     
      <div>
        <h2>My todo App</h2>
        <AddTodo addHandler={this.addTodo}/>
        <TodoList todoList ={this.state.todoList}
                deleteHandler= {this.deleteTodo}
                editHandler={this.editTodo}
                cancelHandler={this.cancelTodo} 
                saveHandler={this.saveTodo}
                onToggle = {this.toggle} 
         />
      </div>
    )
  }
}

export default TodoApp;