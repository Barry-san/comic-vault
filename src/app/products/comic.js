import Link from "next/link";
export default function Comic({ comicData }) {
  return (
    <Link href={`/products/${comicData.id}`} className="h-full inline-flex ">
      <div className="border-white border flex flex-col w-full h-full justify-between ">
        <img
          src={`${comicData.thumbnail.path}.${comicData?.thumbnail?.extension}`}
          alt=""
          className="object-cover object-center w-full aspect-square"
        />
        <div className="flex justify-between w-full items-center gap-4 border p-2 h-full">
          <p className="uppercase underline">{comicData.title}</p>
          <p>${comicData.prices[0].price}</p>
        </div>
      </div>
    </Link>
  );
}
