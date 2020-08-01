import React from 'react';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Register from './Components/Register';
import Todos from './Components/Todos'
import PrivateRoute from './hocs/PrivateRoute';
import UnPrivateRoute from './hocs/UnprivateRoute';
import Admin from './Components/Admin';
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App (){
    return(
        <Router>
        <Navbar/>
        <Route exact path="/" component={Home}/>
      <UnPrivateRoute path="/login" component={Login}/>
      <UnPrivateRoute path="/register" component={Register}/>
      <PrivateRoute path="/todos" roles={["user","admin"]} component={Todos}/>
      <PrivateRoute path="/admin" roles={["admin"]} component={Admin}/>
        </Router>
    );
}

export default App;