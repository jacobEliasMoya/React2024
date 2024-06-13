import React from 'react'
import PropTypes from 'prop-types'

function Button(props) {
  return (
    <a className={props.buttonClass} href={props.buttonLink}> {props.buttonText}</a>
  )
}

Button.propTypes = {
    buttonClass:PropTypes.any,
    buttonLink:PropTypes.any,
    buttonText:PropTypes.any,
}

export default Button
