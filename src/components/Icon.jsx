import React from 'react'
import PropTypes from 'prop-types'

function Icon(props) {
  return (
    <i className={props.iconClass}></i>
  )
}

Icon.propTypes = {
    iconClass:PropTypes.string
}

export default Icon
