import React from 'react'

const NewsItem =(props)=> {
        let {title,desc,url,imageUrl,author,date}=props;
        return (
            <div>   
                    <div className="card">
                        <img src={imageUrl?imageUrl:"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4qVtM"} className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">{title} </h5>
                            <p className="card-text">{desc}</p>
                            <p className="card-text"><small className="text-muted">By {author?author:'Unknown'} on {new Date(date).toGMTString()}</small></p>
                            <a href={url} target="_blank" className="btn btn-primary">Read More</a>

                        </div>
                        </div>
            </div>
        )
}
export default NewsItem