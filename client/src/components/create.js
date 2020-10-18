import React, { Component } from 'react'


class Create extends Component {
    state = {
        title: null,
        img_url: null,
        snippet: null,
        body: null,
        country: null,
        user_name: null,
        user_password: null,
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,           
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addBlog(this.state)
        
    }

    handleLoggin = (e) =>{
        e.preventDefault();
        this.props.loggin(this.state.user_name, this.state.user_password)
    }
    handleClick = () =>{
        this.props.logout()
    }
    render(){
        return this.props.loggedIn ? (
            <div className="container">
                {this.props.loggedIn ?
                    <button className="btn btn-info text-center" onClick={this.handleClick}>Logout</button>
                : ''}
                <h2>Add new blog entry</h2>
                <form className="form-group" onSubmit={this.handleSubmit}>
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
            <form className="form-group" onSubmit={this.handleLoggin}>
                <input name="user_name" className="form-control my-3" placeholder="please enter username" id="user_name" type="text" onChange={this.handleChange} required/>
                <input name="user_password" className="form-control my-3" placeholder="please enter password" id="user_password" type="password" onChange={this.handleChange} required/>
                <button type="submit" className="btn btn-primary my-3" id="loggin">Submit</button>
            </form>
        </div>
    }
}
export default Create;