import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    capitalFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);
        this.state = {
            article: [],
            loading: false,
            page: 1,
            totalResults: 0,
        };
        document.title = `${this.capitalFirstLetter(this.props.category)} - News Fresh`;
    }


    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=30cd54ccf8ec47779df2003715ad1516&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
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

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 });
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=30cd54ccf8ec47779df2003715ad1516&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            article: this.state.article.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
        })
    };

    render() {
        return (
            <>

                <h1 className='text-center my-4'>Fresh News - Top {this.capitalFirstLetter(this.props.category)} Headlines</h1>
                {!this.state.loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={this.state.items.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.article.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row">
                            {this.state.article.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.image_url ? element.urlToImage : ""}
                                        newsUrl={element.url ? element.url : ""} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div></div>
                </InfiniteScroll>

            </>
        )
    }
}

export default News
