import React from "react";
import { fetchCategoryNews } from "../../../utils/fetchNews";

type PageProps = {
  params: {
    category: string;
  };
};

async function Categories({ params: { category } }: PageProps) {
const news = await fetchCategoryNews(category);

   return (
    <div>
      {news.articles.map((item:string) => (
        <p>{item.title}</p>
      ))}
    </div>
  );
}

export default Categories;
