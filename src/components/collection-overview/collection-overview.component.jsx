import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import './collection-overview.scss'
import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollectionForPreview } from "../../redux/shop/shop.selector";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);
const mSTP = createStructuredSelector({
  collections: selectCollectionForPreview,
});
export default connect(mSTP)(CollectionsOverview)