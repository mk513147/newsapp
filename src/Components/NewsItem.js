import React, { Component } from 'react'
import defaultImage from './no_image.png'


export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div>
        <div className="card my-2 mx-2">
          <img src={!imageUrl?{defaultImage}:imageUrl} className="card-img-top" alt="image ka url nahi diya hai" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target='blank' className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
