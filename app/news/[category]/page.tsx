import React from "react";
import { categories } from "../../../constants";
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
      <h1 className="headerTitle">{category}</h1>
      <NewsList news={news} />
    </div>
  );
}

export default Categories;

export async function generalteStaticParams() {
  return categories.map((category) => ({
  category:category,
  
}))
}

// It prebuildes this pages:
// localhost:3000/news/business
// localhost:3000/news/entertainment
// localhost:3000/news/general
// localhost:3000/news/health
// localhost:3000/news/science
// localhost:3000/news/sports
// localhost:3000/news/technology
