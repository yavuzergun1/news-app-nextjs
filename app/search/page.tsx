import React from "react";
import { fetchSearchNews } from "../../utils/fetchNews";
import NewsList from "../NewsList";

<<<<<<< HEAD
type SearchPageProps = {
  searchParams: { term: string };
};

async function SearchList({ searchParams }: SearchPageProps) {
<<<<<<< Updated upstream
  const news: News = await fetchSearchNews(searchParams?.term);
=======
  const news: News = await fetchSearchNews(searchParams?.term!);
=======
type PageProps = {
  searchParams: { term: string };
};

async function SearchList({ searchParams }: PageProps) {
  const news: News = await fetchSearchNews(searchParams?.term);
>>>>>>> parent of b854249 (page props name changed)
>>>>>>> Stashed changes
  console.log(searchParams);

  return (
    <div>
      <h1 className="headerTitle">Search Results for: {searchParams?.term} </h1>
      <NewsList news={news} />
    </div>
  );
}

export default SearchList;
