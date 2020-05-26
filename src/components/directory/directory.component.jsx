import React from 'react'
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux'
import {selectDirectorySections} from '../../redux/directory/directory.selector'
import {createStructuredSelector} from 'reselect'
import './directory.style.scss'


  const Directory = ({ sections }) => (
    <div className="directory-menu">
      {sections.map(({ title, imageUrl, id, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  );


 const mSTP = createStructuredSelector({
   sections: selectDirectorySections,
 });
 export default connect(mSTP)(Directory);