import React from 'react'
import PropTypes from 'prop-types'

function LogoImg(props) {
  return (
    <img src={props.imgSrc} alt={props.imgAlt} />
  )
}

LogoImg.propTypes = {
    imgSrc:PropTypes.any,
    imgAlt:PropTypes.any,
}

export default LogoImg
