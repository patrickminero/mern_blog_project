import React, { Component } from 'react'


class Update extends Component {
    state = {
        id: null,
        title: null,
        img_url: null,
        snippet: null,
        body: null,
        country: null,
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,            
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.props.updateBlog(this.state)
    }
    render(){
        return this.props.loggedIn ? (
            <div className="container">
                <h2>Add new blog entry</h2>
                <form className="form-group" onSubmit={this.handleSubmit}>
                    <input name="id" className="form-control my-3" placeholder="blog id" onChange={this.handleChange} id='id' required/>
                    <input name="title" className="form-control my-3" placeholder="blog title" onChange={this.handleChange} id='title' required/>
                    <input name="country" className="form-control my-3" placeholder="country" onChange={this.handleChange} id='country' required/>
                    <input name="img_url" className="form-control my-3" placeholder="image url" onChange={this.handleChange} id='img_url' required/>
                    <input name="snippet" className="form-control my-3" placeholder="blog snippet" onChange={this.handleChange} id="snippet" required/>
                    <textarea name="body" className="form-control my-3" placeholder="blog content" onChange={this.handleChange} id="body" rows="30" cols="100" required></textarea>
                    <button type="submit" className="btn btn-primary my-3" id="submit">Submit</button>
                </form>
            </div>
        ) : 
        <div className="container">
            <form>
                <input name="user_name" className="form-control my-3" placeholder="please enter username" id="user_name" type="text" required/>
                <input name="user_password" className="form-control my-3" placeholder="please enter password" id="user_password" type="password" required/>
            </form>
        </div>
    }
}
export default Update;