// type Article = {
//   author: string | null;
//   category: string;
//   country: string;
//   description: string;
//   image: string;
//   language: string;
//   published_at: string;
//   soruce: string;
//   title: string;
//   url: string;
// };

// type Pagination = {
//   count: Int;
//   limit: Int;
//   offset: Int;
//   total: Int;
// };

// type NewsResponse = {
//   pagination: Pagination;
//   data: Article[];
// };

// This types builded for newsApi api calls
type Category =
  | "general"
  | "business"
  | "entertainment"
  | "health"
  | "science"
  | "sports"
  | "technology";

type News = {
  articles: Article[];
};

type Article = {
  source: any;
  author?: string | null;
  description: string;
  title: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};
