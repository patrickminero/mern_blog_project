import React, { Component }from 'react';
import axios from 'axios'

class DisplayBlog extends Component {
    state = {
        blog: null,
    }
    componentDidMount(){
        let id = this.props.location.pathname;
        axios.get(`https://jsonplaceholder.typicode.com/posts${id}`)
          .then(res => {
            this.setState({
              blog: res.data
            });
          })
      }
        
    render() {
        const blog = this.state.blog ? (
            <div className="container">
                <h3>{this.state.blog.title}</h3>
                <p>{this.state.blog.body}</p>
            </div>
        ) : (
            <div className="container">
                <h3>Loading blog...</h3>
            </div>
        )
        return(
            <div className="container">
                {blog}
            </div>
        )
    }
}
export default DisplayBlog