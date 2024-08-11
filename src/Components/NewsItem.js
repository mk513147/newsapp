import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div>
        <div className="card my-2 mx-2" style={{ width: "18rem" }}>
          <img src={!imageUrl?"https://gumlet.assettype.com/malibu%2F2023-04%2F59d3e1a7-019f-46eb-ba51-03989f32c4c1%2Fbirds_7901303_960_720.jpeg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100":imageUrl} className="card-img-top" alt="image ka url nahi diya hai" />
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
