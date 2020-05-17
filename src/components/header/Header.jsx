import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./header.scss";
import CartIcon from "../cart/cartIcon/CartIcon";
import CartDropdown from "../cart/cartDropdown/CartDropdown";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../cart/cart.selectors";
import { selectCurrentUser } from "../auth/user.selectors";
import { signOutStart } from "../../redux/actions/user.action";

const Header = ({ currentUser, hidden, signOutStart }) => {
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
          <div className="option" onClick={signOutStart}>
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

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
