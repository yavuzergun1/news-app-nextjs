import React from "react";
import LiveTimeStamp from "./LiveTimeStamp";
import ReadMoreButton from "./ReadMoreButton";

type ArticleProp = {
  article: Article;
};

function Article({ article }: ArticleProp) {
  return (
    <article className="h-[510px] bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-sm hover:scale-105 hover:shadow-lg hover:bg-slate-200 transition-all duration-200 ease-out">
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="h-56 w-full object-cover rounded-t-lg shadow-md"
        />
      )}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-col p-5">
          <h2 className="font-bold font-serif">{article.title}</h2>
          <section className="mt-2 flex-1">
            <p className="text-xs line-clamp-2">{article.description}</p>
          </section>
          <footer className="text-xs text-right ml-auto space-x-1 pt-5 italic text-gray-400">
            <p>{article.author}</p>
            <p>
              <LiveTimeStamp time={article.publishedAt} />
            </p>
          </footer>
        </div>
        <ReadMoreButton article={article} />
      </div>
    </article>
  );
}

export default Article;
