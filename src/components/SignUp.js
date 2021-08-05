import React, { Component } from 'react';

export default class SignUp extends Component {

    constructor() {
        super();
        this.state = {
        name: "",
        email: "",
        password: ""
        };
    }
    
    handleNameChange = evt => {
        this.setState({ name: evt.target.value });
    };

    handleEmailChange = evt => {
        this.setState({ email: evt.target.value });
    };

    handlePasswordChange = evt => {
        this.setState({ password: evt.target.value });
    };
    
    handleSubmit = () => {
        const { name, email, password } = this.state;
        alert(`Signed up with name: ${name} email: ${email} password: ${password}`);
    };


    render() {
        const { name, email, password } = this.state;
        const isEnabled = name.length > 0 && email.length > 0 && password.length > 0;

        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-8 left">
                        <div class="dots">
                            <span>Step 1 of 3</span>
                            <span class="dot active"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                        </div>
                        <div class="form-containter">
                            <div class="row"> 
                                <h1 class="form-h">Let’s set up your account</h1>
                                <p class="form-p">Already have an account? <a href="home" class="form-link">Sign in</a></p>
                            </div>
                            <form class="row form">
                                <input type="text" placeholder="Your name" value={this.state.name} onChange={this.handleNameChange}/>
                                <input type="text" placeholder="Email address" value={this.state.email} onChange={this.handleEmailChange}/>
                                <select name="user-type" id="user">
                                    <option value="Designer">Designer</option>
                                    <option value="Developer">Developer</option>
                                    <option value="Quality Assurance">Quality Assurance</option>
                                    <option value="Project Manager">Project Manager</option>
                                </select>
                                <input type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/>
                                <button id="next-button" disabled={!isEnabled}>Next</button>
                            </form>
                            <div class="row"> 
                                <p class="form-p">By clicking the “Next” button, you agree to creating a free account, and to <a href="home" class="form-link">Terms of Service</a> and <a href="home" class="form-link">Privacy Policy</a>.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 right">
                        <div class="dummy">
                            <h1 class="dummy-h">Dummy Heading</h1>
                            <p class="dummy-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
