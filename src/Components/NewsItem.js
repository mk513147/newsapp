import React, { Component } from 'react'
import Image from './Image';

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, date, author } = this.props;
    return (
      <div>
        <div className="card my-2 mx-2">
          <Image imageUrl={imageUrl}/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unkown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target='blank' className="btn btn-sm btn-primary" >Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
