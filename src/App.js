// import './App.css';
import React, {useState, useEffect} from 'react';
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

const API = "http://localhost:3000"


function App() {
  //Do I need to fetch flowers here?
  //Do I need to fetch stores here?  

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>

          <Route exact path="/login" component={Auth} />
          <Route exact path="/signup" component={RegisterUserForm} />
          <Route exact path="/addStore" component={AddStore} />
          {/* <Route exact path="/addStore" component={null} /> */}


          <Route exact path="/summerflowers"> <MainContainer/> </Route>
          <Route exact path="/wedding"> <MainContainer/> </Route>
          <Route exact path="/occasions"> <MainContainer/> </Route>
          <Route exact path="/" component={MainContainer}/>
          {/* <Route exact path="/flower"> <Flower/> </Route> */}

          {/* <Route exact path="/flower/:id" render={(props) =>  {
            let flowerId = props.match.params.id
            const currentFlower = flowers.find(x => x.id == parseInt(flowerId))
            console.log("this is the current flower we're sending: " , currentFlower)
            return <Flower currentFlower={currentFlower}/>
              }
            }
          /> */}
          <Route path='/flowers/:id' component={Flower} />
          <Route path='/user/:id' component={Dashboard} />
          <Route path='/order/:id' component={OrderFlower} />

        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
