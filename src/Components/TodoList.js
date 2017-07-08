import React, {PropTypes} from 'react';
import $ from 'jquery'; 
import './todo.css';

class TodoList extends React.Component{
  constructor(){
    super();
  }

  static propTypes = {
    todoList: PropTypes.array.isRequired
  };

  componentWillMount () {
    console.log("TodoList: componentWillMount...");
  }
  componentDidMount () {
    console.log("TodoList: componentDidMount...");
  }

  componentWillUnmount() {
    console.log("TodoList: componentWillUnmount...");
  }

  componentDidUpdate() {
    console.log("TodoList: componentDidUpdate...");
  }

  componentWillReceiveProps() {
    console.log("TodoList: componentWillReceiveProps...");
  }

  shouldComponentUpdate() {
    console.log("TodoList: componentWillReceiveProps...");
    return true;
  }

edit(i){      
    this.props.editHandler(i);      
}

 render(){
      const style = {
         textDecoration: 'line-through'
      };

      return(      
        <ul>                 
           {this.props.todoList.map((todo,i)=> 
              
              <li key={i} onClick={()=>this.props.onToggle(todo)}>
                {!todo.isInEditMode?<span className={todo.completed ? "completed" : ""}>
                  {todo.name}</span>:""} 
              {todo.isInEditMode == true? 
                <span >
                  <input type="text" 
                    defaultValue={todo.name} 
                    id={'txt_'+ i} 
                    ref={(input) => { this.textInput = input; }} />
                  
                  <input  type="button" value="Save" 
                    onClick={()=>this.props.saveHandler(i,this.textInput.value)} />
                  <input  type="button" value="Cancel" 
                    onClick={()=>this.props.cancelHandler(i)} />
                </span>
                :
                <span>
                  <a href="#" onClick={()=>this.props.deleteHandler(i)}>Delete</a>&nbsp;
                  <a href="#" onClick={()=>this.edit(i)}>Edit</a>
                </span>
             }                               
             </li>)}
        </ul>
      );
    }  
}

export default TodoList;