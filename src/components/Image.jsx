import React from 'react'
import PropTypes from 'prop-types'

function Image(props) {
  return (
    <img src={props.imageSource} alt={props.imageDescription} className={props.imageClass}/>
  )
}

Image.propTypes = {
    imageClass:  PropTypes.string,
    imageSource: PropTypes.string,
    imageDescription: PropTypes.string,
}

export default Image
