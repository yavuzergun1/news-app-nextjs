import React from "react";
import NewsList from "../NewsList";
import { fetchHomePageNews } from "../../utils/fetchNews";

async function HomePage() {
  const news: News = await fetchHomePageNews();
  console.log(news);
  
const articles = news.articles;

  return (
    <div>
      <NewsList news={articles} />
    </div>
  );
}

export default HomePage;
