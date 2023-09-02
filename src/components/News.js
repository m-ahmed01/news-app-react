// rce  -> react class based compnent

import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
// impt  -> import prop-Types
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {

  // instead of writing whole JSON we make an array of name articles and write articles section in it
  // articles = [
  //   {
  //   "source": {
  //   "id": "espn-cric-info",
  //   "name": "ESPN Cric Info"
  //   },
  //   "author": null,
  //   "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //   "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //   "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //   "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //   "publishedAt": "2020-04-27T11:41:47Z",
  //   "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": "espn-cric-info",
  //   "name": "ESPN Cric Info"
  //   },
  //   "author": null,
  //   "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //   "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //   "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //   "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //   "publishedAt": "2020-03-30T15:26:05Z",
  //   "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  //   }
  //   ]

  static defaultProps = {
    country: 'us',
    pageSize: 8,
    category: 'general'
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    console.log("Hello i am a constructor from news component");
    this.state = {
      // articles: this.articles,  // as we are not using above written articles so we use to do it like below
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} | News App`;
  }

  async updateNews(pageNo) {
    this.props.setProgress(7);
    console.log("update fun");
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`; // pageSize means how many number of items to be displayed per page
    this.setState({ loading: true });
    let data = await fetch(url); // it will return a promise so, that's why we have made it as async-await function
    this.props.setProgress(40);
    let parsedData = await data.json();
    this.props.setProgress(60);
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
    this.props.setProgress(100);
  }

  async componentDidMount() {
    // console.log("cdm");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7c0f3b1372b247358716d5e480767c55&page=1&pageSize=${this.props.pageSize}`; // pageSize means how many number of items to be displayed per page
    // this.setState({loading: true});
    // let data = await fetch(url); // it will return a promise so, that's why we have made it as async-await function
    // let parsedData= await data.json();
    // console.log(parsedData);
    // this.setState({articles: parsedData.articles, 
    //   totalResults: parsedData.totalResults,
    // loading: false
    // })
    this.updateNews();
  }

  handlePreviousClick = async () => {
    console.log("Previous")
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url); // it will return a promise so, that's why we have made it as async-await function
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    })
    // this.setState({page: this.state.page-1})
    // this.updateNews();
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`; // pageSize means how many number of items to be displayed per page
    // this.setState({ loading: true });
    let data = await fetch(url); // it will return a promise so, that's why we have made it as async-await function
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults
      // ,
      // loading: false
    })
  };

  handleNextClick = async () => {

    console.log("next");
    // 20 is the page size
    if (this.state.page + 1 > Math.ceil((this.state.totalResults / this.props.pageSize))) {

    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      console.log(url)
      this.setState({ loading: true });
      let data = await fetch(url); // it will return a promise so, that's why we have made it as async-await function
      console.log(data)
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      })

      // this.setState({page: this.state.page+1})
      // this.updateNews();

    }
  }

  render() {
    console.log("render");

    return (
      <>
        <h1 className='text-center' style={{ margin: '35px 0px', marginTop:'90px' }} >Top {this.capitalizeFirstLetter(this.props.category)} Headlines | News App</h1>
        {this.state.loading && <Spinner/>}
        <br />
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults }
          loader={<Spinner/>}
        >

          <div className="container">
            <div className="row">
              {/* map() function will be applied only on array */}
              {!this.state.loading && this.state.articles.map((element,index) => {

                return <div className="col-md-3" key={index}>
                  <NewsItem title={element.title ? element.title.slice(0, 30) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>

              })}

            </div>
          </div>
        </InfiniteScroll>
        <div className="conatiner d-flex justify-content-between my-4">
          {/* <button disabled={this.state.page <= 1} type="button" onClick={this.handlePreviousClick} className=" btn btn-info">&#8592; Previous</button> */}
          {/* here 20 is the number of items on page default by browser */}
          {/* <button disabled={this.state.page + 1 > Math.ceil((this.state.totalResults / this.props.pageSize))} type="button" className="btn btn-success" onClick={this.handleNextClick}>Next &rarr;</button> */}
        </div>
      </>
    )
  }
}

export default News
