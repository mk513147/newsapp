import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps ={
        country: 'in',
        pageSize: 8,
        category: 'general'
    }

    static propTypes ={
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    constructor() {
        super();
        this.state = {
            article: [],
            loading: false,
            page: 1,
        };
    }

    
    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=758fb9d28589446b966ac18e564e47b6&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            article: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
        })
    }
    
    async componentDidMount() {
        this.updateNews();
    }
    handlePrev = () => {
        this.setState({page: this.state.page - 1});
        this.updateNews();
    }

    handleNext = () => {
        this.setState({page: this.state.page + 1});
        this.updateNews();
    }

    render() {
        return (
            <>
                <div className='container my-3'>
                    <h1 className='text-center my-4'>Top Headlines</h1>
                    {this.state.loading && <Spinner />}
                    <div className="row">
                        {!this.state.loading && this.state.article.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.image_url ? element.urlToImage : ""} 
                                newsUrl={element.url ? element.url : ""} author={element.author} date={element.publishedAt} source= {element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
                <div className='container d-flex justify-content-between my-2'>
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePrev}>&larr; Prev</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
                </div>
            </>
        )
    }
}

export default News
