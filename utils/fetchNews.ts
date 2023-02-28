export const fetchSearchNews = async (searchTerm: string) => {
  console.log("FETCHNEWS TERM", searchTerm);
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=68de52d6ae5c4128827da8297eddca00`,
    { cache: "no-cache" }
  );
  const news: News = await res.json();
  console.log(news);

  return news;
};

export const fetchCategoryNews = async (category: string) => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=68de52d6ae5c4128827da8297eddca00`,
    { next: { revalidate: 40 } }
  );
  const news: News = await res.json();
  return news;
};

export const fetchHomePageNews = async () => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=68de52d6ae5c4128827da8297eddca00`,
    { next: { revalidate: 20 } }
  );
  const news: News = await res.json();
  // console.log(news);

  return news;
};
