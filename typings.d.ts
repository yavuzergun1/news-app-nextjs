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

// type Category =
//   | "general"
//   | "business"
//   | "entertainment"
//   | "health"
//   | "science"
//   | "sports"
//   | "technology";

type News = {
  articles: [
    {
      author: string | null;
      description: string;
      published_at: string;
      title: string;
      url: string;
      urlToImage: string;
      publishedAt: string;
      content: string;
    }
  ];
};

type NewsResponse = {
  status: string;
  totalResults: number;
  news: Articles[];
};
