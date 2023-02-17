export const fetchSearchNews = async (searchTerm: string) => {
  console.log(searchTerm);
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${process.env.NEWSAPI_API_KEY}`,
    { cache: "no-cache" }
  );
  const news: News = await res.json();
  return news;
};

export const fetchCategoryNews = async (category: string) => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.NEWSAPI_API_KEY}`,
    { next: { revalidate: 40 } }
  );
  const news: News = await res.json();
  return news;
};

export const fetchHomePageNews = async () => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWSAPI_API_KEY}`,
    { next: { revalidate: 20 } }
  );
  const news: News = await res.json();
<<<<<<< HEAD
  console.log(news);
  
=======

>>>>>>> 7573a66f9f7671cf7d15042091cf2046e787cddb
  return news;
};
