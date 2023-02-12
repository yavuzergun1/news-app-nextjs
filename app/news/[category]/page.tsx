import React from "react";

type PageProps = {
  params: {
    category: string;
  };
};

function Categories({ params: { category } }: PageProps) {
  console.log(category);

  return <div>Category: {category}</div>;
}

export default Categories;
