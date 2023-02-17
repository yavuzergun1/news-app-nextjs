import { notFound } from "next/navigation";

type ArticlePageProps = {
  searchParams?: Article;
};

function ArticlePage({ searchParams }: ArticlePageProps) {
  console.log(searchParams);
  
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    return notFound();
  }

  const article: Article = searchParams;

  return (
    <article>
      <section className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10">
        {article.urlToImage && (
          <img
            className="h*50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"
            src={article.urlToImage}
            alt={article.title}
          />
        )}

        <div className="px-10">
          <h1 className="headerTitle px-0 no-underline pb-2">
            {article.title}{" "}
          </h1>
          <div className="flex divide-x-2 space-x-4">
            <h2 className="font-bold">
              {article.author !== "null" ? article.author : ""}{" "}
            </h2>

            <p className="pl-4">{article.publishedAt} </p>
                  </div>
                  <p className="pt-4">{article.description} </p>
        </div>
      </section>
    </article>
  );
}

export default ArticlePage;
