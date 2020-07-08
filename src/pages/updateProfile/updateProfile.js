import React, { Component } from 'react';
import './updateProfile.css';
import Portlet from '../../components/HOC/portlet/portlet';
import Col from 'react-bootstrap/Col';
import User from '../../assets/images/user.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import firebase from '../../config/fire';
import Axios from '../../axios/axios2';
import Spinner from '../../components/spinner/spinner';
require('firebase/auth');

class UpdateProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            imagePreviewUrl: User,
            firstName: 'John',
            lastName: 'Doe',
            email: '',
            city: '',
            zip: '',
            selectState: '',
            loading: false,
            message: ''
        }

        this.OnInputChange = this.OnInputChange.bind(this);
    }

    componentDidMount() {
        var that = this;

        // Fetch logged in Email ID
        firebase.auth().onAuthStateChanged(function (user) {
            that.setState({ email: user.email });
        });

        // Fetching data from josn
        Axios.get("/").then(res => {
            const result = this;
            result.setState({
                firstName: res.data.firstName,
                lastName: res.data.lastName,
                city: res.data.city,
                zip: res.data.zip,
                selectState: res.data.selectState,
                imagePreviewUrl: res.data.imagePreviewUrl,
                laoding: false
            });
        }).catch(response => {
            this.setState({ loading: false });
            console.log('Error Message in Updateprofile js');
        });
    }

    // Form Submit
    handleSubmit = (e) => {
        let current = this;
        current.setState({ loading: true, message: 'Successfully updated profile' });
        e.preventDefault();
        setInterval(function () {
            current.setState({
                loading: false,
                message: ''
            });
        }, 2000);

        var userInfo = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            city: this.state.city,
            selectState: this.state.selectState,
            zip: this.state.zip,
            imagePreviewUrl: this.state.imagePreviewUrl,
            loading: true
        };

        // Insert Data in firebase database
        firebase.database().ref('userInfo').set(userInfo);
    }

    // Image file Uplaod
    photoUpload = (e) => {
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(file);
    }

    // On Input change
    OnInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        const loading = this.state.loading;
        return (
            <div className="content">
                <div className="w-50 container">
                    <Portlet PortletTitle="Personal Details">
                        {/* Image File Uplaod */}
                        <div className="avatar-wrap">
                            <div className="avatar">
                                <input type="file" onChange={this.photoUpload} />
                                <img src={this.state.imagePreviewUrl} alt="User" />
                            </div>
                        </div>

                        {/* Form */}
                        <Form onSubmit={this.handleSubmit}>
                            {/* First and Last Name */}
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridFirst">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter first name" name="firstName" value={this.state.firstName} onChange={this.OnInputChange} required />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridLast">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter last name" name="lastName" value={this.state.lastName} onChange={this.OnInputChange} required />
                                </Form.Group>
                            </Form.Row>

                            {/* Email */}
                            <Form.Group controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={this.state.email} readOnly disabled />
                            </Form.Group>

                            {/* City, state and Zip code */}
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control name="city" value={this.state.city} onChange={this.OnInputChange} required />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control as="select" name="selectState" value={this.state.selectState} onChange={this.OnInputChange}>
                                        <option>Select State</option>
                                        <option>Maharashtra</option>
                                        <option>Delhi</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control name="zip" value={this.state.zip} onChange={this.OnInputChange} required />
                                </Form.Group>
                            </Form.Row>

                            {/* Submit button */}
                            <div className="d-flex justify-content-center my-3">
                                <Button variant="primary" type="submit">
                                    {loading ?
                                        <Spinner /> : "SUBMIT"
                                    }
                                </Button>
                            </div>

                            {/* Success Alert Message */}
                            {this.state.message !== '' ?
                                <Alert variant="success">
                                    {this.state.message}
                                </Alert> : null
                            }
                        </Form>
                    </Portlet>
                </div>
            </div>
        )
    }
}

export default UpdateProfile;