import React from "react";

import CollectionOverview from "../../components/collectionOverview/CollectionOverview";
import { Route } from "react-router-dom";
import Collection from "../collection/Collection";

const Shop = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

export default Shop;
