/* eslint-disable @next/next/no-img-element */
import style from "./ImageSearchResult.module.scss";
import Link from "next/link";
import PaginationButtons from "./PaginationButtons";
import { ImageResult } from "@/Util/ImageType";
export default function ImageSearchResults({
  results,
}: {
  results: ImageResult;
}) {
  return (
    <div className={style.ImageResult}>
      <div>
        {results.items.map((result) => (
          <div key={result.link}>
            <div>
              <Link href={result.image.contextLink}>
                <img
                  src={result.link}
                  alt={result.title}
                  height={300}
                  width={400}
                  className="h-60 group-hover:shadow-xl w-full object-contain transition-shadow"
                />
              </Link>
              <Link href={result.image.contextLink}>
                <h2 className="group-hover:underline truncate text-xl">
                  {result.title}
                </h2>
              </Link>
              <Link href={result.image.contextLink}>
                <p className="group-hover:underline text-gray-600">
                  {result.displayLink}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="ml-16">
        <PaginationButtons />
      </div>
    </div>
  );
}
