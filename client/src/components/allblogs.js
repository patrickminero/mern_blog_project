import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import Filter from './filter'

class AllBlogs extends React.Component{
    state = {
        blogs: [ ]
    }
        
    
componentDidMount(){
    axios.get('/blogs/getblogs')
        .then(res => {
        this.setState({blogs: res.data})
        })
    }

render(){
    const { blogs } = this.state
    const BlogList = blogs.length ? (
        blogs.map(blog => {
            return(
                <div className="card my-3 blog shadow p-3 mb-5 bg-white rounded " key={blog._id}>
                    <div className="card-body" key={blog._id}>
                    {this.props.loggedIn ? <Link to={'/all'} className="btn btn-sm btn-info float-right mx-1" onClick={() => {this.props.deleteBlog(blog._id)}}>Delete</Link> : ''}
                        <Link to={'/' +  blog._id} className="text-decoration-none text-info"><h2 className="card-title">{ blog.title }</h2></Link> 
                        <h3 className="card-text snippet">{ blog.snippet }</h3>
                    </div> 
                </div>
                )
            })                       
            ) : (
                <div className="text-center display-2 text-info">No blogs yet</div>
            );
            

    return(
        <div>
            <div className="container">
                {BlogList}
            </div>
        </div>
    )
}
}
export default AllBlogs