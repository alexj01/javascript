/**
*
* Drawer
*
*/

import React from 'react';
import classNames from 'classnames';

import styles from './styles.css';

function Drawer({ items, selectItem, itemLabelAttribute, itemKeyAttribute, isDrawerOpen }) {
  const itemNodes = items.map(item => (
    <div
      className={styles.item}
      key={item[itemKeyAttribute]}
      onClick={() => selectItem(item)}
    >
      {item[itemLabelAttribute]}
    </div>
  ));

  return (
    <div className={classNames(styles.drawer, { [styles.drawerOpen]: isDrawerOpen })}>
      {itemNodes}
    </div>
  );
}

Drawer.propTypes = {
  items: React.PropTypes.array.isRequired,
  selectItem: React.PropTypes.func.isRequired,
  itemLabelAttribute: React.PropTypes.string.isRequired,
  itemKeyAttribute: React.PropTypes.string.isRequired,
  isDrawerOpen: React.PropTypes.bool.isRequired,
};

export default Drawer;
