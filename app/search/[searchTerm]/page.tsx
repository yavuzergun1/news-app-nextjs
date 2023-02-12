import React from "react";
import { fetchNews } from "../../../utils/fetchNews";

type PageProps = {
  params: {
    searchTerm: string;
  };
};

async function SearchList({ params: { searchTerm } }: PageProps) {
  const news = await fetchNews(searchTerm);

  return (
    <div>
      {news.articles.map((item) => (
        <p>{item.title}</p>
      ))}
    </div>
  );
}

export default SearchList;
