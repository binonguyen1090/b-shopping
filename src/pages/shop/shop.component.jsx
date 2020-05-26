import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { connect } from "react-redux";
import {selectShopCollections} from '../../redux/shop/shop.selector'
import { createStructuredSelector} from 'reselect'
const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mSTP = createStructuredSelector({
  collections: selectShopCollections,
});
export default connect(mSTP)(ShopPage);