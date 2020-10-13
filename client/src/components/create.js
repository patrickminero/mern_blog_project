import React, { Component } from 'react'


class Create extends Component {
    state = {
        id: null,
        title: null,
        img_url: null,
        snippet: null,
        blogBody: null,
        country: null,
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addBlog(this.state);
        
    }
    handleDelete = (e) => {
        
    }
    render(){
        return this.props.loggedIn ? (
            <div className="container">
                <h2>Add new blog entry</h2>
                <form className="form-group" onSubmit={this.handleSubmit}>
                    <input name="title" className="form-control" placeholder="blog title" onChange={this.handleChange} id='title' required/>
                    <input name="country" className="form-control" placeholder="country" onChange={this.handleChange} id='country' required/>
                    <input name="imageurl" className="form-control" placeholder="image url" onChange={this.handleChange} id='image' required/>
                    <input name="snippet" className="form-control" placeholder="blog snippet" onChange={this.handleChange} id="snippet" required/>
                    <textarea name="body" className="form-control" placeholder="blog content" onChange={this.handleChange} id="blogBody" rows="30" cols="100" required></textarea>
                    <button type="submit" className="btn btn-primary" id="submit">Submit</button>
                </form>
            </div>
        ) : null
    }
}
export default Create;