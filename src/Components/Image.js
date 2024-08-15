import React, { Component } from 'react'
import defaultImage from './no_image.png'

export default class Image extends Component {
  render() {
    return (
      <div>
        <img src={defaultImage} className="card-img-top" alt="image ka url nahi diya hai" />
        {/* <img src={!{imageUrl} ? { defaultImage } : {imageUrl}} className="card-img-top" alt="image ka url nahi diya hai" /> */}
      </div>
    )
  }
}
