export const fetchNews = async (searchTerm: any) => {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=973aa7f1d7f6474c91c1a37d5aadd1d4`
  );
  console.log(searchTerm);
  const news: Articles[] = await res.json();
  return news;
};
