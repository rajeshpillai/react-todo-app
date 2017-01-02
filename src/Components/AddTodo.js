import React, {PropTypes} from 'react';
import $ from 'jquery'; 

class AddTodo extends React.Component{
  constructor(){
    super();
    this.add = this.add.bind(this);
  }

  static propTypes = {
    addHandler: PropTypes.func.isRequired
  };

  add() {
        if(this.refs.myInput.value.length > 0){ 
            this.props.addHandler(this.refs.myInput.value);
            this.refs.myInput.value="";       
        }
        this.refs.myInput.focus();
  }

  render(){
     return(     
       <div>
        <input type="text"  ref="myInput"/>
        <input type="button" value="Add" onClick = {this.add}/>
        {/*<input type="button" value="Submit" onClick = {() => this.add()}/>*/}

      </div>
    );
  }
}

export default AddTodo;