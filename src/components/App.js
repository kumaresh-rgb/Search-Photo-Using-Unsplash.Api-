import React from 'react';
import unsplash  from '../components/unsplash'

import Inputsearch from '../components/inputsearch'
import ImageListt from '../components/ImageList'
import '../css/App.css';


class App extends React.Component {

 state={images:[]};

    onUsersubmit= async (term)=>{
    const response= await unsplash.get("/search/photos",{
      params:{query:term}
     
    })
        this.setState({images:response.data.results})
  }

render(){
  return(
    <div className="App">
      <Inputsearch onSubmit={this.onUsersubmit}/>
       <ImageListt images={this.state.images}/>
    </div>
      
  );
}
}

export default App;
