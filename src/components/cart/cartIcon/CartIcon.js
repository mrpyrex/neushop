import React from "react";

import { ReactComponent as ShoppingIcon } from "../../../assets/shoppingbag.svg";
import "./cartIcon.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../../redux/actions/cart.action";

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
