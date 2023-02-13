import React from "react";
import { fetchSearchNews } from "../../utils/fetchNews";
import NewsList from "../NewsList";

type PageProps = {
  searchParams: { term: string };
};

async function SearchList({ searchParams }: PageProps) {
  const news: News = await fetchSearchNews(searchParams.term);
  console.log(searchParams?.term);

  return (
    <div>
      <h1 className="headerTitle">Search Results for: {searchParams?.term} </h1>
      <NewsList news={news} />
    </div>
  );
}

export default SearchList;