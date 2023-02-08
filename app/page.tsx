import React from 'react'
import { categories } from '../constants'

 async function Home() {
 console.log(categories);
 
     const news: NewsResponse = await fetchNews(categories.join(','));
     
  return (
      <div>
          
    </div>
  )
}

export default Home