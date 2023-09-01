import { NextPage } from "next";
import { AiFillWallet } from "react-icons/ai";
import Link from "next/link";
import WebSearchResults from "@/Component/WebSearchResult";
interface WebPageProps {
  searchParams: {
    searchTerm: string;
  };
}

const url = process.env.url || "";
const getData = async (search = "lecture") => {
  try {
    const response = await fetch(
      "https://www.googleapis.com/customsearch/v1?key=AIzaSyDxVK5ivGLtAjAvVB6fpslj8vHRrGn8siY&cx=822bb8f55521f4067&q=" +
        search
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

const WebPage: NextPage<WebPageProps> = async ({ searchParams }) => {
  const data = await getData(searchParams.searchTerm);

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
  return <>{results && <WebSearchResults results={data} />}</>;
};

export default WebPage;
