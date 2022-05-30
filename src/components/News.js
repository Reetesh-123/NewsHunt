import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spin from './Spin'
import InfiniteScroll from 'react-infinite-scroll-component'

const News=(props)=> {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1)
    const [totalResult, setTotalResult] = useState(0);
    const capitalizeFirstLetter=(string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      document.title=`NewsHunt-${capitalizeFirstLetter(props.category)}`;
      
   const update = async()=>
    {
        props.setProgress(5);
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data=await fetch(url);
        props.setProgress(30);
        let parsedData=await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles);
        setPage(page);
        setTotalResult(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }
    useEffect(() => {
        update();
    }, [])
//     const handleNext = async()=>{      
               
//                 setState(page+1);
//                 update();
//          }
//    const handlePrev = async()=>{
//             setState(page-1);
//             update();
//     }
    const fetchMoreData=async()=>{
        setLoading(true);
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1);
        let data=await fetch(url);
        let parsedData=await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResult(parsedData.totalResults);
        setLoading(false);
    }
        return (
            <>
                <h1 className='text-center'>NewsHunt Top-{capitalizeFirstLetter(props.category)} Headlines</h1>
                {loading && <Spin/>}
                <InfiniteScroll style={{overflow:'none'}}
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length!==totalResult}
                loader={<Spin/>}
                >
                 <div className="container my-3">
                     <div className="row">
                    { articles.map((element)=>{
                     return <div className="col-md-4 col-sm-6 my-3"  key={element.url}>
                    <NewsItem title={element.title} desc={element.description} imageUrl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} />
                    </div>
                     })}
                    </div>
                </div>
                </InfiniteScroll>
            </>
        )
}
News.defaultProps={
    country:'in',
    pageSize:8,
    category:'general'
};
News.propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
};
export default  News