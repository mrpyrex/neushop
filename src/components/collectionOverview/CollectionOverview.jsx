import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./collectionOverview.scss";
import CollectionPreview from "../collectionPreview/CollectionPreview";
import { selectCollectionForPreview } from "../../pages/shop/shopSelectors";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
