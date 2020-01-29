import React from 'react';
import './assets/style/style.css';
import picto from './assets/img/noun_Search.svg'

const handleChange = (e) =>{
    const title = e.target.value;
    this.setState()
}

function App() {
  return (
    <div className='AppMain' style={{justifyContent: this.state.justifyContent}}>
            <h1>Mile'Up</h1>
            <input type="text" className='search' onChange={this.handleChange.bind(this)} />

    </div>
  );
}

export default App;
