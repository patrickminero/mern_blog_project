import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/navbar';
import Home from './components/home';
import AllBlogs from './components/allblogs'
import Create from './components/create'
import Footer from './components/footer';
import DisplayBlog from './components/blog'
import Gallery from './components/gallery'

class App extends Component {
state = {
    data: null,
    loggedIn: true
  };

  addBlog = (blog) =>{
    blog.id = Date.now();
    let blogArray = [...this.state.blogs, blog];
    this.setState({blogs: blogArray})
  }
  deleteBlog = (id) =>{
    let newBlogs = this.state.blogs.filter(blog => {
      return blog.id !== id
    });
    this.setState({blogs: newBlogs})
  }

  componentDidMount() { 
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar loggedIn={this.state.loggedIn}/>
            <Switch>
              <Route exact path="/"component={Home}/>
              <Route path="/create" render={(props) => (<Create addBlog={this.addBlog} loggedIn={this.state.loggedIn} props={props} />)}/>
              <Route exact path="/all" render={(props) => (<AllBlogs loggedIn={this.state.loggedIn} props={props} deleteBlog={this.deleteBlog}/>)}/>
              <Route exact path="/gallery" component={Gallery}/>
              <Route path="/:id" component={DisplayBlog}/>
            </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;