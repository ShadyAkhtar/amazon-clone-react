import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51JK2xNSDeK3BOhXXCdn1ofpPf11O5dBQqdoatPvLVV6Oopxr1s1S7YPITmdGC0lGl9tavGYwzAPIwQB8W33FIoZA00PwoakngM"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User is : ", authUser);
      if (authUser) {
        //User is signed in /was sign in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user not sign in /logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            {/* Header  */}
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            {/* Header  */}
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
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
