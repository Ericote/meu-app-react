import { Card, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";

const FetchNews = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setNews(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Notícias</h1>
      {
        isLoading ? (<CircularProgress/>) : (
            news.map((noticia) => (
                <div key={noticia.id}>
                  <div>{noticia.title}</div>
                  <div>{noticia.body}</div>
                </div>
            ))
        )
      }
    </div>
  );
};

export default FetchNews;
