type NewsListProp = {
  news: News;
};

function NewsList({ news }: NewsListProp) {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10">
      {news.articles.map((item) => (
        <div>
          <img src={item.urlToImage} alt={item.title} className="h-56 w-full object-cover rounded-t-lg shadow-md" />
          <p>{item.title}</p>
        </div>
      ))}
    </main>
  );
}

export default NewsList;
