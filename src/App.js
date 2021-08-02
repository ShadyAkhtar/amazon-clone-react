import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('User is : ', authUser);
      if(authUser){
        //User is signed in /was sign in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        // user not sign in /logged out 
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

   
  }, [])
  
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            {/* Header  */}
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            {/* Header  */}
            <Header />
            {/* Home  */}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
