import { Alert } from "@mui/material";
import React, { useEffect, useState } from "react";

const FetchProducts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const url = "https://dummyjson.com/products";
  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((respData) => {
        console.log(respData);
        setData(respData.products);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <Alert>Carregando</Alert>
      ) : (
        data.map((produto) => <div>{produto.title}</div>)
      )}
    </div>
  );
};

export default FetchProducts;
