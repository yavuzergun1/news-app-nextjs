
import React from "react";
import { fetchSearchNews } from "../../utils/fetchNews";
import NewsList from "../NewsList";

type SearchPageProps = {
  searchParams: { term: string };
};

async function SearchList({ searchParams }: SearchPageProps) {
  const news: News = await fetchSearchNews(searchParams?.term);
  console.log(searchParams);

  return (
    <div>
      <h1 className="headerTitle">Search Results for: {searchParams?.term} </h1>
      <NewsList news={news} />
    </div>
  );
}

export default SearchList;
