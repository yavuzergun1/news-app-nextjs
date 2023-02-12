export const fetchSearchNews = async (searchTerm: any) => {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${process.env.NEWSAPI_API_KEY}`

  );
  console.log(searchTerm);
  const news: Articles[] = await res.json();
  return news;
};

export const fetchCategoryNews = async (searchTerm: any) => {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=tr&category=${searchTerm}&apiKey=${process.env.NEWSAPI_API_KEY}`,
    { cache: "force-cache" }
  );
  console.log(searchTerm);
  const news: Articles[] = await res.json();
  return news;
};

// https://newsapi.org/v2/top-headlines?country=tr&apiKey=973aa7f1d7f6474c91c1a37d5aadd1d4