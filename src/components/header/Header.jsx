import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/config";

import "./header.scss";
import CartIcon from "../cart/cartIcon/CartIcon";
import CartDropdown from "../cart/cartDropdown/CartDropdown";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../cart/cart.selectors";
import { selectCurrentUser } from "../auth/user.selectors";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        NEU Shop
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/shop">
          Contact
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Signout
          </div>
        ) : (
          <Link className="option" to="/login">
            Signin
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
