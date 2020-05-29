import React from 'react'
import {connect} from 'react-redux'
import './collection.style.scss'
import collectionItem from '../../components/collection-item/collection-item.component'
import { selectCollection } from '../../redux/shop/shop.selector'


const CollectionPage = ({ collection }) => {
  return (
  <div className="collection-page">asd</div>
  )
}

const mSTP = (state, ownProp) => ({
  collection: selectCollection(ownProp.match.params.collectionId)(state)
});
export default connect(mSTP)(CollectionPage)