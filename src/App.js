import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { checkUserSession } from "./redux/actions/user.action";

import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { selectCurrentUser } from "./components/auth/user.selectors";
import { createStructuredSelector } from "reselect";
import Checkout from "./pages/checkout/Checkout";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/checkout" component={Checkout} />
          <Route
            exact
            path="/login"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <Login />
            }
          />
          <Route
            exact
            path="/register"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <Register />
            }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
