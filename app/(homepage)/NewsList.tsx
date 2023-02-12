import Article from "./Article";

type NewsListProp = {
  news: News;
};

function NewsList({ news }: NewsListProp) {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10">
      {news.articles.map((article) => (
        <div>
       <Article article={article} />
        </div>
      ))}
    </main>
  );
}

export default NewsList;
