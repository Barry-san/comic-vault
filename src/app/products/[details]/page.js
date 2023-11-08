"use client";
import { useCartContext } from "@/app/context/cartContext";
import useFetchComics from "@/app/hooks/useFetchComics";
import toast from "react-hot-toast";

export default function DetailsPage({ params }) {
  const { addToCart } = useCartContext();
  const { isLoading, comics } = useFetchComics(`/${params.details}`);
  return (
    <div>
      {isLoading ? (
        <div className="w-full h-[90vh] grid place-content-center relative">
          Loading...
        </div>
      ) : (
        <div className="w-full grid md:grid-cols-2 p-4">
          <img
            src={`${comics[0].thumbnail.path}.${comics[0].thumbnail.extension}`}
            alt=""
            className="max-h-[80vh] object-contain w-full"
          />
          <div className="flex flex-col p-4 gap-4 justify-between">
            <div className="flex flex-col justify-between gap-4">
              <h1 className="uppercase underline">{comics[0].title}</h1>
              <p>${comics[0].prices[0].price}</p>
              <div>
                <p>{comics[0].description}</p>
              </div>
            </div>
            <div className="flex gap-4 justify-between flex-col">
              <button
                className="border py-4 bg-primary-0 "
                onClick={() => {
                  addToCart(comics[0]);
                  toast.success("item added to cart", {
                    style: {
                      backgroundColor: "black",
                      border: "solid red 1px",
                      color: "white",
                    },
                    duration: 900,
                  });
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
