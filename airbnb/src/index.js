import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import "./style.scss";
import NavbarLogin from "./NavbarLogin";
import { auth } from './firebase-config';
import Form from './Form';
import { onAuthStateChanged } from 'firebase/auth';
import App from './App';
const Index = () => {
    const [user,SetUser] = useState(false);
    onAuthStateChanged(auth,(currentUser) => {
        if(currentUser) {
            return SetUser(true)
        } else {
            return SetUser(false)
        }
    });
    if(user === true) {
        return (
            <Router>
                <Switch>
                <Route path="/" component={App}></Route>
                </Switch>
            </Router>
            
        )
    } else {
      return (
        <Router>
        <NavbarLogin/>
        <Switch>
            <Route exact path="/" component={Form}>
                <Form/>
            </Route>
        </Switch>
    </Router>
      )
    }

}
ReactDOM.render(<Index/>,document.getElementById("root"))
