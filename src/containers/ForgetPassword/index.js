import React, { Component } from 'react';
import './style.css';
import Logo from '../../components/Logo';
import MobileTypeInput from '../../components/UI/MobileTypeInput';
import SubmitGradientButton from '../../components/UI/SubmitGradientButton';
//import {NotificationManager,NotificationContainer} from 'react-notifications'
//import axios from 'axios'
import { Link } from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { email: "", errors: {} };
        this.handleInput = this.handleInput.bind(this);
    }

    // textHandler = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }

    handleInput = e => {
        // e.preventDefault();
        console.log(e.target.value);
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }

    // forgetPasswordHandler = (e) => {
    //     e.preventDefault();
    //     console.log(this.state);
    // }

    handleForm = e => {
        e.preventDefault();
        if (this.state.email === '') {
            //NotificationManager.warning("Email is Required");
            return false;
        }
        // const data = { email: this.state.email };
        // axios
        //     .post("http://localhost:2019/user/reset", data)
        //     .then(result => {
        //        NotificationManager.success("Password Reset link sent to yout email .Please check the your email.Link Will be Valid For 30 min");
        //     })
        //     .catch(err => {
        //           if (err.response && err.response.status === 404)
        //             NotificationManager.error(err.response.data.msg);
        //           else
        //             NotificationManager.error("Something Went Wrong");
        //           this.setState({ errors: err.response })
        //     });
        }

    render() {
        return (
            <div className="LoginContainer">
                <div className="WelcomeText">
                    <h3>Reset Password</h3>
                </div>
                <Logo style={{margin: '0 auto'}} />
                <div className="LoginWrapper">
                    <form onSubmit={this.handleForm} autoComplete="off">

                        <MobileTypeInput 
                            type="text"
                            placeholder="Email"
                            value={this.state.email}
                            textHandler={this.handleInput}
                            name="email"
                        />
                        <SubmitGradientButton 
                            label="Send" value="send Mail" onClick={this.handleForm}
                            style={{marginTop: '30px'}}
                        />
                    </form>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Link to="/signup">Create a new account</Link>
                    <Link to="/login">Login</Link>
                </div>
                
                
            </div>
        );
    }
}

export default Login;