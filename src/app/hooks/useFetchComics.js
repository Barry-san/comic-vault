import { useEffect, useState } from "react";

export default function useFetchComics(endpoint = "") {
  const [comics, setComics] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    console.log("useEffect ran");
    try {
      fetch(
        `http://gateway.marvel.com/v1/public/comics${endpoint}?ts=1&apikey=3202ae6dd1953fc6635a71e92e487635&hash=608fb31908d13d0aae79896d8ec57bd7`
      ).then((res) => {
        res.json().then((val) => {
          setComics(val.data.results);
          setIsLoading(false);
        });
      });
    } catch (error) {
      console.log(error);
    }
  }, [endpoint]);

  return { comics, isLoading };
}
