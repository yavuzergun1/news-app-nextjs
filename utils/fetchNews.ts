export const fetchSearchNews = async (searchTerm: string) => {
  console.log("FETCHNEWS TERM", searchTerm);
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=973aa7f1d7f6474c91c1a37d5aadd1d4`,
    { cache: "no-cache" }
  );
  const news: News = await res.json();
  console.log(news);

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
  // console.log(news);

  return news;
};
