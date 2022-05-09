import React, { useEffect, useState } from 'react';
import "../../App.css";
import "./style.css";
import { useNavigate } from "react-router-dom";


function News(props) {
    const [newsList, setNewsList] = useState([])
    let navigate = useNavigate();

    const getNewsList = () => {
        fetch('https://radiant-stream-23882.herokuapp.com/api/v1/posts')
            .then(response => response.json())
            .then(result => setNewsList(result.data));
    }
    useEffect(() => {
        getNewsList()
    }, [])

    const handleGoPostDetail = (post, idPost) => {
        navigate(`/post/${idPost}`)
    }

    return (
        <div className="section_wrap" id="post">
            <div className="section_title">
                <div className="seperate"></div>
                <h3 className="name">BÀI VIẾT MỚI</h3>
            </div>
            <div className="list_wrap">
                {newsList.map((news) => (
                    <div className="news" key={news._id}>
                        <img src={`https://radiant-stream-23882.herokuapp.com/img/post/${news.logo}`} className='news_img' alt={news.logo} />
                        <span className='news_title' onClick={() => (handleGoPostDetail(news, news._id))}>{news.title}</span>
                        <span className='news_desc' onClick={() => (handleGoPostDetail(news, news._id))}>{news.contentSub}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default News;