"use client";
import { useEffect, useState } from "react";

export default function useFetchComics(endpoint = "") {
  const [comics, setComics] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    try {
      fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}${endpoint}?ts=1&apikey=${process.env.NEXT_PUBLIC_API_KEY}&hash=${process.env.NEXT_PUBLIC_MD5_HASH}`,
        { cache: "force-cache" }
      ).then((res) => {
        res.json().then((val) => {
          setComics(val.data.results);
          setIsLoading(false);
        });
      });
    } catch (error) {
      console.log(error); //fixing env vaiables lol
    }
  }, [endpoint]);

  return { comics, isLoading };
}
