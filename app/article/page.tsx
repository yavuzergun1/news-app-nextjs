"use client";
import { notFound, useSearchParams } from "next/navigation";

type ArticlePageProps = {
  searchParams?: Article;
};



function ArticlePage () {

  const searchParams = useSearchParams();
  const urlToImage = searchParams.get("urlToImage");
  const title : any = searchParams.get("title");
  const publishedAt = searchParams.get("publishedAt");
  const description = searchParams.get("description");
  const author = searchParams.get("author");





  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    return notFound();
  }


  return (
    <article>
       <section className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10">
        {urlToImage && (
          <img 
            className="h*50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"
            src={urlToImage}
            alt={title}
          />
        )}

        <div className="px-10">
          <h1 className="headerTitle px-0 no-underline pb-2">
            {title}{" "}
          </h1>
          <div className="flex divide-x-2 space-x-4">
            <h2 className="font-bold">
              {author !== "null" ? author : ""}{" "}
            </h2>

            <p className="pl-4">{publishedAt} </p>
          </div>
          <p className="pt-4">{description} </p>
        </div>
      </section> 
    </article>
  );
}

export default ArticlePage;
