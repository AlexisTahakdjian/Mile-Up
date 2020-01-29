import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style/style.css';

class App extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            inputValue: '',
            justifyContent: 'center'
        }
    }
    onChange(inputEntry) {
        if (inputEntry) {
            this.setState({inputValue: inputEntry, justifyContent: 'flex-start'})
        } else {
            this.setState({inputValue: inputEntry, justifyContent: 'center'})
        };
    }
    render() {
        return (
            <div className='AppMain' style={{justifyContent: this.state.justifyContent}}>
                <h1>Mile'Up</h1>
                <input
                    type="text"
                    className='search'
                    value={this.state.inputValue}
                    onChange={(evt) => this.onChange(evt.target.value)} />

            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
