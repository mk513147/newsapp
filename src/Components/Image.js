import React from 'react'
import defaultImage from './no_image.png'

const Image = (props)=> {
    let { imageUrl } = props;
    return (
      <div>
        <img src={imageUrl ? imageUrl: defaultImage} className="card-img-top" alt="url nahi diya hai" />
      </div>
    )
  }

export default Image
