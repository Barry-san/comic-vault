import Image from 'next/image';
import Link from 'next/link';

export default function Comic({ comicData }) {
  return (
    <div className='flex flex-col basis-full border border-black dark:border-white justify-between '>
      <Link href={`/products/${comicData.id}`}>
        <Image
          src={`${comicData.thumbnail.path}.${comicData?.thumbnail?.extension}`}
          alt=''
          height={400}
          width={400}
          className='object-cover object-center w-full h-[400px]'
        />
      </Link>
      <Link href={`/products/${comicData.id}`}>
        <div className='flex flex-col justify-between w-full  gap-3 border p-2 flex-grow'>
          <h2 className='uppercase underline font-bold'>{comicData.title}</h2>

          <p>${comicData.prices[0].price || '0.00'}</p>
        </div>
      </Link>
    </div>
  );
}
