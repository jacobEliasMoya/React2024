import React from 'react'
import PropTypes from 'prop-types'

function NavItem(props) {
  return (
    <a className={props.navLink}>{props.navName}</a>
  )
}

NavItem.propTypes = {
    navLink:PropTypes.any,
    NavItem:PropTypes.any
}

export default NavItem;

