import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            article: [],
            loading: false,
        };
    }

    async componentDidMount(){
        let url = "https://api.thenewsapi.com/v1/news/all?api_token=3MqXjUJBL6K2e7jR7N7tgJgRRl0wpgfipgwdYA7O&language=en&limit=3";
        let data = await fetch(url);
        let parsedData  = await data.json();
        this.setState({article: parsedData.data})
    }

    render() {
        return (
            <div className='container my-3'>
                <h1>Top Headlines</h1>
                <div className="row">
                    {this.state.article.map((element) => {
                        return <div className="col-md-4" key={element.uuid}>
                            <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.image_url?element.image_url:""} newsUrl={element.url?element.url:""} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News
