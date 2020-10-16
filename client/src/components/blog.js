import React, { Component }from 'react';
import axios from 'axios'

class DisplayBlog extends Component {
    state = {
        blog: {},
    }
    componentDidMount(){
        let id = this.props.match.params.id
        // console.log(id)
        axios.get(`/blogs/${id}`)
          .then(res => {
            
            this.setState({blog: res.data})
            // console.log(this.state.blog)
          })
      }
        
    render() {
        const blog = this.state.blog ? (
            <div className="container">
                <h3 className="display-4">{this.state.blog.title}</h3>
                <p className="blog-text">{this.state.blog.body}</p>
            </div>
        ) : (
            <div className="container">
                <h3 className=" display-2 text-center text-info">Loading blog...</h3>
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