import style from "./WebSearchResult.module.scss";
import Link from "next/link";
import Parser from "html-react-parser";
import PaginationButtons from "./PaginationButtons";
import { SearchResult } from "@/Util/type";

export default function WebSearchResults({
  results,
}: {
  results: SearchResult;
}) {
  return (
    <div className={style.ResultPage}>
      <p>
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>
      {results.items?.map((result) => (
        <div className={style.result} key={result.link}>
          <div className="group flex flex-col">
            <Link className="" href={result.link}>
              <h2>{result.title}</h2>
            </Link>
          </div>

          <p className="text-gray-600">{Parser(result.htmlSnippet)}</p>
        </div>
      ))}
      <PaginationButtons />
    </div>
  );
}
