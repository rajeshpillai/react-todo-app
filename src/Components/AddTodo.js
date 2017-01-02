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
        if(this.input.value.length > 0){ 
            this.props.addHandler(this.input.value);
            this.input.value="";       
        }
        //this.refs.myInput.focus();
        this.input.focus();
  }

  render(){
     return(     
       <div>
        <input type="text"  ref2="myInput"  
          ref={(input) => { this.input = input; }} />
        <input type="button" value="Add" onClick = {this.add}/>
        {/*<input type="button" value="Submit" onClick = {() => this.add()}/>*/}

      </div>
    );
  }
}

export default AddTodo;