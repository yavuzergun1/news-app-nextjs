import React from "react";
import NewsList from "./NewsList";
import { fetchHomePageNews } from "../../utils/fetchNews";

async function HomePage() {
  const news: News = await fetchHomePageNews();

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}

export default HomePage;
