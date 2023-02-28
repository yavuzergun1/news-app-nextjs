"use client";

import React, {useEffect, useState} from "react";
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
  console.log("SEARCH PAGE PARAMS:", term);

  useEffect(() => {
    const getData = async () => {
      type termProp={ term: string;}

      try {
        const news: News = await fetchSearchNews(term);

        setSearchNews(news);

      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [term]);

  if (!searchNews) {
    return (
      <div>Loading...</div>
    )
   }
console.log(searchNews);

    return (
      <div>
        <h1 className="headerTitle">Search Results for:{term} </h1>
      
        <NewsList news={searchNews} />
      </div>
    );
  
}
export default SearchList;
