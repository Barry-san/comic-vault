"use client";
import useFetchComics from "../hooks/useFetchComics";
import React from "react";
import Comic from "./comic";

export default function Products() {
  const { comics, isLoading } = useFetchComics();

  return (
    <div className="p-4">
      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <>
          <h2 className="text-center md:text-2xl my-4 font-bold uppercase">
            Our Offerings:
          </h2>
          <div className="w-full grid gird-cols-1 md:grid-cols-3 gap-4 justify-between items-stretch">
            {comics.map((comic) => (
              <Comic comicData={comic} key={comic.id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
