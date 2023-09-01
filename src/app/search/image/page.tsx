export const dynamic = "force-dynamic";

import ImageSearchResults from "@/Component/ImageSearchResults";
// import ImageSearchResults from "@/components/ImageSearchResults";
import Link from "next/link";
const getData = async (search = "lecture", startIndex: string | number = 1) => {
  try {
    const response = await fetch(
      "https://www.googleapis.com/customsearch/v1?key=AIzaSyDxVK5ivGLtAjAvVB6fpslj8vHRrGn8siY&cx=822bb8f55521f4067&q=" +
        search +
        "&searchType=image&start=" +
        startIndex
    );
    if (!response.ok) throw new Error("failed to fetch data");
    const data = await response.json();
    const result = data;
    // console.log(JSON.stringify(data, null, 2));
    return result;
  } catch (err) {
    console.log("test", JSON.stringify(err));
  }
};
export default async function ImageSearchPage({
  searchParams,
}: {
  searchParams: {
    searchTerm: string;
    start: string | number;
  };
}) {
  const startIndex = searchParams.start || "1";
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await getData(searchParams.searchTerm, startIndex);
  const data = response;
  const results = data.items;

  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">No results found</h1>
        <p className="text-lg">
          Try searching for something else or go back to the homepage{" "}
          <Link href="/" className="text-blue-500">
            Home
          </Link>
        </p>
      </div>
    );
  }
  return <>{results && <ImageSearchResults results={data} />}</>;
}
