import React from  'react';
import { Route, Switch } from  'react-router-dom';

import './App.css';

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { auth} from "./firebase/firebase.util";


class App extends React.Component{

    constructor(){
        super();
        this.state = {
            currentUser : null
        }
        console.log("App Constructor");
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        console.warn("App componentDidMount");
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
         this.setState({currentUser : user});
         console.log(user);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }


    render() {
      console.log("App Render");
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path='/' component={ HomePage } />
                    <Route path='/shop' component={ ShopPage } />
                    <Route path='/signin' component={ SignInAndSignUpPage } />
                </Switch>

            </div>
        );
    }

}

export default App;


