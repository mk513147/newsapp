import React, { Component } from 'react'
import defaultImage from './no_image.png'

export default class Image extends Component {
  render() {
    let { imageUrl } = this.props;
    return (
      <div>
        <img src={imageUrl ? imageUrl: defaultImage} className="card-img-top" alt="url nahi diya hai" />
      </div>
    )
  }
}
