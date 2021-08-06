// import './App.css';
import React, {useState, useEffect} from 'react';
import ReactSession from 'react-client-session';
import MainContainer from './components/MainContainer';
import Navbar from './components/NavBar';
import Auth from './components/Auth';
import RegisterUserForm from './components/RegisterUserForm'
import AddStore from './components/AddAStore'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
  useParams
} from 'react-router-dom';
import Flower from './components/Flower';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
import OrderFlower from './components/OrderFlower';
import NavBar from './components/NavBar';
import AddAStore from './components/AddAStore';

const API = "http://localhost:3000"


function App() {
  const [user, setUser] = useState(null)
  const [userId, setUserId] = useState(null)

  

  // if(!user) return <Auth onLogin={setUser} />
  function readFromStorage() { //auth-login
    let userDataFromStorage = JSON.parse(localStorage.getItem('user_json'))
    let {user} = userDataFromStorage
    console.log(user, "data from auht-login")
    setUserId(user.id)
  }

  function setNewUserIdFromStorage() { //register
    let user = JSON.parse(localStorage.getItem('user_json'))
    setUserId(user.id)
    console.log(userId, "from new user id from storage fn", user)
  }
 

  function handleChangeUserId(newId) {
    // console.log(newId);
    setUserId(newId)
    console.log(userId, "from hendle change")
  }

  function handleChangeUser(newUserValue) {
    // console.log(newUserValue)
    setUser(newUserValue)
  }
  function handleUserIDForStore() {
    let user = JSON.parse(localStorage.getItem('user_json'))
    console.log(user, "Handle user id for store");
    setUserId(user.id)
  }
  
  


  return (
    <div className="App">
      <Router>
        <NavBar user={user} setUser={setUser} />
      <Switch>
        <Route exact path="/login" render={ (props) => (<Auth {...props} readFromStorage={readFromStorage} handleChangeUserId={handleChangeUserId} handleChangeUser={handleChangeUser} />)} />
        <Route exact path="/signup" render={ (props) => (<RegisterUserForm {...props} setNewUserIdFromStorage={setNewUserIdFromStorage}  handleChangeUserId={handleChangeUserId} handleChangeUser={handleChangeUser} />)} />
        <Route exact path="/addStore" render={ (props) => (<AddAStore {...props} handleChangeUserId={handleChangeUserId} handleChangeUser={handleChangeUser} handleUserIDForStore={handleUserIDForStore} />)} />

        <Route exact path="/dashboard" render={ (props) => (<Dashboard {...props} handleChangeUserId={handleChangeUserId} handleChangeUser={handleChangeUser} userId={userId} />)} />
        {/* <Route path='/dashboard/:id' component={Dashboard} /> */}
        {/* {userId?<Route path='/dashboard/:id' component={Dashboard} />: null} */}
        <Route path='/flowers/:id' component={Flower} />
        <Route path='/user/:id' component={Dashboard} />
          <Route path='/order/:id' component={OrderFlower} />
        <Route exact path="/" component={ MainContainer}/>


      </Switch>
      </Router>


    </div>
  );
}

export default App;

