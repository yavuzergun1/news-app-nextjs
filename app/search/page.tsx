"use client";

import React, { useEffect, useState } from "react";
import { fetchSearchNews } from "../../utils/fetchNews";
import NewsList from "../NewsList";
import { useSearchParams } from "next/navigation";



type Term = { term: string };

function SearchList() {
  const [searchNews, setSearchNews] = useState<Article[]>([]);

  const searchParams = useSearchParams();
  const term: any = searchParams.get("term");

  useEffect(() => {
    const getData = async () => {
      console.log("SEARCH PAGE PARAMS:", term);

      const news: News = await fetchSearchNews(term);
      console.log(news);

      setSearchNews(news.articles);
    };
    getData();
  }, [term]);

  return (
    <div>
      <h1 className="headerTitle">Search Results for:{term} </h1>
      <NewsList news={searchNews} /> 
    </div>
  );
}
export default SearchList;
