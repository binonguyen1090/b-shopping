import React from 'react'

import './collection.style.scss'
import collectionItem from '../../components/collection-item/collection-item.component'

const CollectionPage = ({match}) => (
    <div className="collection">
        {match.params.collectionId}
    </div>
)

export default CollectionPage