import React, { Component } from 'react';

class Footer extends Component {
    state = {
        name: null,
        email: null,
        message: null,
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.sendMessage(this.state)
    }
    render() {
        return (
            <footer className="container mt-5">
                <div className="row">
                    <div className="col col-lg-6 col-12" >
                        <form method="POST" action="blogs/message" className="form-group" onSubmit={this.handleSubmit}>
                                <h3 className="text-center">Get in touch.</h3>
                                <input type="text" onChange={this.handleChange} className="form-control my-3" id="name" placeholder="Your name..." required/>
                                <input type="email" onChange={this.handleChange} className="form-control my-3" id="email" placeholder="Your email..." required />
                                <textarea className="form-control my-3" onChange={this.handleChange} id="message" placeholder="Message..." cols="50" rows="5" required></textarea>
                                <button id="submit" type="submit" className="btn btn-primary my-3">Send</button>
                        </form>
                    </div>
                    <div className="col col-lg-6 col-12">
                        <h3 className="text-center">Find me on social media.</h3>
                        <div className="text-center">
                            <span className="iconify text-center" data-icon="ant-design:instagram-filled" data-inline="false"></span>
                            <span className="iconify align-middle" data-icon="ant-design:linkedin-filled" data-inline="false"></span>
                            <span className="iconify align-middle" data-icon="cib:unsplash" data-inline="false"></span>
                            <span className="iconify align-middle" data-icon="brandico:facebook-rect" data-inline="false"></span>
                        </div>
                    </div>
                </div>
                <div className="text-center"><h2>Coded with &hearts; in Barcelona &copy; Patrick Minero 2020</h2></div>
            </footer>
        )
    }
}

export default Footer;