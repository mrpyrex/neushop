import React from "react";

import { ReactComponent as ShoppingIcon } from "../../../assets/shoppingbag.svg";
import "./cartIcon.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../../redux/actions/cart.action";
import { selectCartItemsCount } from "../cart.selectors";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
