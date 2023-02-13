import React from "react";
import { fetchCategoryNews } from "../../../utils/fetchNews";
import NewsList from "../../NewsList";

type PageProps = {
  params: {
    category: string;
  };
};


async function Categories({ params: { category } }: PageProps) {
const news: News = await fetchCategoryNews(category);

   return (
    <div>
  <NewsList news={news} />
  
    </div>
  );
}

export default Categories;
