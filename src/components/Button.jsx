import React from 'react'
import PropTypes from 'prop-types'

function Button(props) {
  return (
    <a className='btn' href={props.buttonLink}> {props.buttonText}</a>
  )
}

Button.propTypes = {
    buttonLink:PropTypes.any,
    buttonText:PropTypes.any,
}

export default Button
