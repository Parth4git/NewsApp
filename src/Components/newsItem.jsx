import React from "react";
import image from "../assets/news.jpeg";

const NewsItem = ({ title, description, urlToImage, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 inline-block my-3 mx-3 px-3 py-3"
      style={{ width: "18rem" }}
    >
      <img
        src={urlToImage ? urlToImage : image}
        style={{ height: "200px", width: "100%" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 100)}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 100)
            : "Nothing to show in detail"}
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
