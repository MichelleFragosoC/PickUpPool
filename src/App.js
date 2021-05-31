import React, {useState, useEffect } from 'react';
import {auth} from './firebase';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserOrders from './components/Orders/UserOrders';
import PickerOrders from './components/Orders/PickerOrders';
import Principal from './components/Principal/Principal';
import DetailOrder from './components/Orders/DetailOrder'
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';
import { RegisterPicker } from './components/Register/RegisterPicker'
import { PickerCancel } from './components/Cancel/PickerCancel';
import PickerQualification from './components/Qualification/PickerQualification';
import { PickerProfile } from './components/Profile/PickerProfile';
import { FormNewPicker } from './components/FormNewPicker/FormNewPicker';

function App() {
  const [user, setUser] = useState(null) //No hubo nada establecido(ningún valoor)
  useEffect(() => { //Estado del servidor
    auth.onAuthStateChanged((user) => { //user del servidor
      if (user) {
        setUser(user) //Cuando existe el usuario setUser. Sincro
      } else {
        setUser(false) //Cuando no existe el usuario
      }
    })
  }, [])

  return(
    <>
    {user !== null ? (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/principal'>
            <Principal user={user}/>
          </Route>
          <Route path='/register'>
            <Register user={user}/>
          </Route>
          <Route path='/orders'>
            <UserOrders user={user}/>
          </Route>
          <Route path='/deliveries'>
            <PickerOrders user={user}/>
          </Route>
          <Route path='/pickerProfile'>
            <PickerProfile user={user}/>
          </Route>
          <Route exact path='/'>
            <Login user={user} />
          </Route>
          <Route path='/details'>
            <DetailOrder />
          </Route>
          <Route path='/registerpicker'>
            <RegisterPicker user={user}/>
          </Route>
          <Route path='/cancelation'>
            <PickerCancel />
          </Route>
          <Route path='/qualify'>
            <PickerQualification user={user}/>
          </Route>
          <Route path='/newPicker'>
            <FormNewPicker user={user} />
          </Route>
        </Switch>
      </div>
    </Router>
    ): <p>Cargando...</p>}
    </>
  );
}

export default App;