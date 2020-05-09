import React from "react";
import "./collectionPreview.scss";
import CollectionItem from "../collectionItem/CollectionItem";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h2>{title}</h2>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
