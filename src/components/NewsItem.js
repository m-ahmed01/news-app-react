// rce  ->> react class based component export

import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    // if this.props is an object then it get pulled and stored in title and description
    let {title, description, imageUrl, newsUrl, author, date,source} = this.props;  // doing de-structuring here
    return (
      <div>
        <div className="my-3">
        <div className="card">  

        <div style={{display: 'flex',
      justifyContent: 'flex-end',
      position: 'absolute',
      right:0
      }}  >
        
        <span className=" badge rounded-pill bg-success" >  {source} </span>
        </div>

        <img src={!imageUrl?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9hxIGIRPVvvpnSQjDGNI0undzKEHbVYvWe-7bvt9W4A&s":imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title} ...  </h5>
            <p className="card-text">{description} ...</p>
            <p className="card-text"><small className="text-body-secondary">By {!author?"unknown": author} on <strong> {new Date (date).toGMTString()} </strong> </small></p>
            <a href={newsUrl} target='_blank' rel="noopener noreferrer" className="btn btn-sm btn-primary">Read More</a>
        </div>
        </div>
      </div>
      </div>
    )
  }
}

export default NewsItem
