import React, { useState, useEffect } from "react";
import NewsItem from "./newsItem";
import axios from "axios";

const NewBoard = ({ categories }) => {
  const [articles, setArticles] = useState([]);
  const apiKey = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    const fetchArticles = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=${categories}&apiKey=${apiKey}`;

      try {
        const response = await axios.get(url);

        if (response.status === 426) {
          throw new Error(
            "426 (Upgrade Required): Please check if you are using HTTPS and if there are any specific requirements from the server."
          );
        }

        if (response.data.articles) {
          setArticles(response.data.articles);
        }
        console.log(response.data.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchArticles();
  }, [categories, apiKey]);

  return (
    <div className="container">
      <h2 className="text-center my-4">
        <span className="text-white">Top</span>
        <span className="badge bg-secondary mx-2">News</span>
      </h2>
      <div className="row">
        {articles.map((news, index) => (
          <div key={index} className="col-md-3 d-flex align-items-stretch ">
            <NewsItem
              title={news.title}
              description={news.description}
              urlToImage={news.urlToImage}
              url={news.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewBoard;
