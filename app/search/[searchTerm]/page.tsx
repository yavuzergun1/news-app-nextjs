import React from "react";
import { fetchSearchNews } from "../../../utils/fetchNews";

type PageProps = {
  params: {
    searchTerm: string;
  };
};

async function SearchList({ params: { searchTerm } }: PageProps) {
  const news : News = await fetchSearchNews(searchTerm);

  return (
    <div>
      {news.articles.map((item) => (
        <p>{item.title}</p>
      ))}
    </div>
  );
}

export default SearchList;
