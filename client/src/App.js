import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/navbar';
import Home from './components/home';
import AllBlogs from './components/allblogs'
import Create from './components/create'
import Update from './components/update'
import Footer from './components/footer';
import DisplayBlog from './components/blog';
import Gallery from './components/gallery';
import Test from './components/test'
import Axios from 'axios';



class App extends Component {
state = {
    data: null,
    loggedIn: false,
  };

  addBlog = (blog) =>{
    Axios({
      url:'blogs/save',
      method: 'POST',
      data: blog
    })
    .then((res)=>{ 
      console.log(res)
    })
    .catch((error) =>{console.log(error)})
  }

  updateBlog = (blog) =>{
    console.log(blog)
    Axios({
      url:`blogs/${blog.id}`,
      method: 'PATCH',
      data: blog
    })
    .then((res)=>{ 
      console.log(res)
    })
    .catch((error) =>{console.log(error)})
  }

  deleteBlog = (id) =>{
    console.log(id)
    Axios({
      url: `blogs/${id}`,
      method: 'DELETE',
      data: id,
    })
    .then((res)=>{ 
      console.log(res)
    })
    .catch((error) =>{console.log(error)})
  }

  // loggin = (name, pass) =>{
  //   let info = {
  //     "name": name,
  //     "pass": pass,
  //   }
  //   Axios({
  //     url: `blogs/5f89e131cce45b11f17458ea`,
  //     method: 'GET',
  //     data: info,
  //   }).then(res => console.log(res))
  // }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar loggedIn={this.state.loggedIn}/>
            <Switch>
              <Route exact path="/"component={Home}/>
              <Route exact path="/test"component={Test}/>
              <Route path="/create" render={(props) => (<Create addBlog={this.addBlog} updateBlog={this.updateBlog} loggedIn={this.state.loggedIn} loggin={this.loggin} props={this.props} />)}/>
              <Route path="/update" render={(props) => (<Update updateBlog={this.updateBlog} loggedIn={this.state.loggedIn} props={this.props} loggin={this.loggin} />)}/>
              <Route exact path="/all" render={(props) => (<AllBlogs loggedIn={this.state.loggedIn} props={props} deleteBlog={this.deleteBlog}/>)}/>
              <Route exact path="/gallery" render={(props) =>(<Gallery images={this.state.images} countries={this.state.countries} props={props}/>)}/>
              <Route path="/:id" component={DisplayBlog}/>
            </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;