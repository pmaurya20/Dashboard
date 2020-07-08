import React, { Component } from 'react';
import firebase from '../../config/fire';
import './login.css';
import { Container } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import Logo from '../../assets/images/Zauba-logo.png';
import Spinner from '../../components/spinner/spinner';
import User from '../../assets/images/user.png';

export class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            passwordSection: true,
            loading: false,
            emailSent: false,
            firstName: 'John',
            lastName: 'Doe',
            imagePreviewUrl: User,
            message: '',
            emailErrorMsg: ''
        };

        this.OnInputChange = this.OnInputChange.bind(this);
        this.OnSubmitForm = this.OnSubmitForm.bind(this);
        this.OnSignUp = this.OnSignUp.bind(this);
    }

    // On Input Change
    OnInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
            loading: false
        })
    }

    // On Submit
    OnSubmitForm(e) {
        e.preventDefault();
        this.setState({ loading: true });
        var userInfo = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            imagePreviewUrl: this.state.imagePreviewUrl,
        };

        firebase.database().ref('userInfo').set(userInfo);
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(u => {
            this.props.history.push("/dashboard");
            this.setState({ loading: false })
        }).catch((error) => {
            this.setState({ loading: false, emailErrorMsg: "Please enter valid email and password - Login" });
        });
    }

    // Sign Up
    OnSignUp(e) {
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(u => {
            this.props.history.push("/dashboard");
        })
            .catch((error) => {
                this.setState({ emailErrorMsg: "Please enter valid email and password - SignUp" });
            });
    }

    // Forgot password
    forgotPassword = (Email) => {
        const current = this;
        current.setState({ passwordSection: false, emailErrorMsg: 'Enter valid Email ID' });
        firebase.auth().sendPasswordResetEmail(Email)
            .then(function (user) {
                current.setState({ message: 'Email sent please check your Inbox', emailErrorMsg: '' })
                setInterval(function () {
                    current.setState(
                        { message: '', passwordSection: true })
                }, 2000);
            }).catch(function (e) {
                console.log(e)
            })
    }

    render() {
        const loading = this.state.loading;
        return (
            <div className="login-conatiner" id="LoginForm">
                <Container>
                    {/* Login Page Header */}
                    <div className="login-header">
                        <img src={Logo} alt="common Lauder" width="280" />
                        <div className="login-head">Login</div>
                    </div>

                    {/* Form */}
                    <form>
                        {this.state.emailErrorMsg !== '' ? <p className="error-msg">{this.state.emailErrorMsg}</p> : null}
                        <div className="form-group floating-label-group">
                            <input type="text" name="email" value={this.state.email} className="form-input form-control" required onChange={e => this.OnInputChange(e)} />
                            <label className="floating-label">Email</label>
                        </div>

                        {this.state.passwordSection ?
                            <div className="form-group floating-label-group mb-0">
                                <input type="password" name="password" value={this.state.password} className="form-input form-control" required onChange={e => this.OnInputChange(e)} />
                                <label className="floating-label">Password</label>
                            </div> : null}

                        <div className="form-group text-left">
                            <button type="button" className="btn btn-action" onClick={() => this.forgotPassword(this.state.email)}>Forget Password?</button>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-common w-100" onClick={e => this.OnSubmitForm(e)}>
                                {loading ?
                                    <Spinner /> : "LOGIN"
                                }
                            </button>

                        </div>
                    </form>

                    {/* Sign Up */}
                    <div className="d-flex justify-content-center">
                        <button type="button" className="btn btn-action" onClick={e => this.OnSignUp(e)}>Don't have an account?</button>
                    </div>

                    {/* Success Message */}
                    {this.state.message !== '' ?
                        <Alert variant="success">
                            {this.state.message}
                        </Alert> : null
                    }
                </Container>
            </div>
        )
    }
}

export default login;