import React from "react";
import '../css/App.css'

class InputSearch extends React.Component {
state={
    term:""
};

   onFormsubmit=(event)=>{
       event.preventDefault();
       this.props.onSubmit(this.state.term)
   }
   
    render() {
        return (
            
               <div className="ui segment ">
                    <form onSubmit={this.onFormsubmit} className="ui form">
                    
                        <div className="field">
                        <input  onChange={event=>this.setState({term:event.target.value})}  type="search"  placeholder="Search..."
                                        
                                        value={this.state.term}                      />
                  
                       
                       </div>
                      
                    </form>
                </div>
       
    
            
        )
    }
}

export default InputSearch;
