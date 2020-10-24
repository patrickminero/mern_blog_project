import React from 'react';
import axios from 'axios';

class Test extends React.Component{
    constructor(){
        super()
        this.state = {
            testData: []
        }
    }
    componentDidMount(){
        axios.get('/database').then(response => {
            let data = response.data; 
            this.setState({testData: data})
            console.log(data)})
    }

    render(){
        return(
            <div>
                <p>this is the response data{this.state.testData}</p>
            </div>
        )
    }
}
export default Test;