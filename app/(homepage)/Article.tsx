import React from "react";

type ArticleProp = {
  article: Article;
};

function Article({ article }: ArticleProp) {
  return (
    <div>
      <img
        src={article.urlToImage}
        alt={article.title}
        className="h-56 w-full object-cover rounded-t-lg shadow-md"
      />
      <p>{article.title}</p>
    </div>
  );
}

export default Article;
