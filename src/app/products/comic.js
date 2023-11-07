import Link from "next/link";
export default function Comic({ comicData }) {
  return (
    <Link href={`/products/${comicData.id}`}>
      <div className="flex flex-col items-center border-white border justify-between">
        <img
          src={`${comicData.thumbnail.path}.${comicData?.thumbnail?.extension}`}
          alt=""
          className="object-cover object-center w-full aspect-square"
        />
        <div className="flex justify-between w-full items-center gap-4 border p-2">
          <p className="uppercase underline">{comicData.title}</p>
          <p>${comicData.prices[0].price}</p>
        </div>
      </div>
    </Link>
  );
}
