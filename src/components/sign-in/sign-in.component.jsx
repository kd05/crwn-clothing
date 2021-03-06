import React from 'react';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from '../../firebase/firebase.util';

import './sign-in.styles.scss';

class SignIn extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : ''
        }
    }

    handleChange = event => {
        const {name , value} = event.target;
        this.setState(() => ({[name] : value}) );
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState(() => ({email : '', password : ''}));
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account.</h2>
                <span>Sign In with your email and password.</span>

                <form onSubmit={this.handleSubmit}>

                    <FormInput type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            required
                            label="Email"
                    />

                    <FormInput type="password"
                           name="password"
                           value={this.state.password}
                           onChange={this.handleChange}
                           required
                           label="Password"
                    />

                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign In With Google
                        </CustomButton>
                    </div>

                </form>
            </div>
        )
    }


}

export default SignIn;