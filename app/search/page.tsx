"use client";

import React, { useEffect, useState } from "react";
import { fetchSearchNews } from "../../utils/fetchNews";
import NewsList from "../NewsList";
import { useSearchParams } from "next/navigation";

type NewsListProp = {
  news: News;
};

function SearchList() {
  const [searchNews, setSearchNews] = useState<NewsListProp[]>([]);

  const searchParams = useSearchParams();
  const term = searchParams.get("term");

  useEffect(() => {
    const getData = async () => {
      console.log("SEARCH PAGE PARAMS:", term);

      // @ts-ignore
      const news: News = await fetchSearchNews(term);
      console.log(news);

      // @ts-ignore

      setSearchNews(news.articles);
    };
    getData();
  }, [term]);

  return (
    <div>
      <h1 className="headerTitle">Search Results for:{term} </h1>
      {/* @ts-ignore */}
      <NewsList news={searchNews} /> : null
    </div>
  );
}
export default SearchList;
