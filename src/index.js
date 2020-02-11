import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style/style.css';

import axios from "axios";
import ReactLoading from 'react-loading';

class App extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            fetching: false,
            fetched: false,
            error: null,
            inputValue: '',
            offset: 300,
            data: null,
            books: [],
        }
    }

    onChange(inputEntry) {
        if (inputEntry) {
            this.setState({inputValue: inputEntry, offset: 20})
            //setTimeout(() => { this.state.inputValue.length > 1 ? this.requestRes() : this.requestApi() }, 1000)
            setTimeout(() => this.requestApi(), 1000)
        } else {
            this.setState({inputValue: inputEntry, offset: 300})

        }
    }

    requestApi(){
        this.setState({fetching: true})
        console.log(this.state.inputValue)

        if(this.state.inputValue.length != 0){
            axios.get(`https://ljsv039eze.execute-api.eu-central-1.amazonaws.com/prod/books?q=${this.state.inputValue}`, {
                headers: {
                    'x-api-key' : 'xj6TH4TfZj2CwwHuEZ4n89TNIdPiTQMJaHL65EC2'
                }
            }).then(res =>{
                console.log(res);
                if (res.status === 200 && res.data.length > 0) {
                    this.setState({books: res.data})
                }else if(res.status === 200 && res.data.length === 0){
                    console.log('pas de resultat trouvé')
                }else{
                    this.setState({books: []})

                }

                this.setState({fetching: false})

            })
        }
    }

 /*   requestRes(param){

    }*/

    render() {
        return (
            <div className='AppMain' >
                <div style={{height: this.state.offset, transition:'all .5s ease-out'}}> </div>

                <h1>Mile'Up</h1>
                <input
                    type="text"
                    className='search'
                    value={this.state.inputValue}
                    onChange={(evt) => this.onChange(evt.target.value)} />


                <div className='page'>
                    {this.state.fetching === true  ?

                        <div>
                           <ReactLoading type ='spinningBubbles' color='#F29441' className='loading' />
                        </div>

                        :

                        <div className='result'>
                            {this.state.books.map(book => <>
                                <div key={book.item.id} className='book'>
                                    <span className='author'>{book.item.author}</span><br/>
                                    <span className='title'>{book.item.title}</span>
                                </div>
                            </>)}
                        </div>
                    }

                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
