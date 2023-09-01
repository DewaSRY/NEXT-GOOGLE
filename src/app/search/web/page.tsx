import { NextPage } from "next";
import { AiFillWallet } from "react-icons/ai";
import { Result } from "@/Util/type";

interface WebPageProps {}
const API_KEY = process.env.API_KEY;
const CONTEXT_KEY = process.env.CONTEXT_KEY;
const search = "apple";
// const url = `https://www.googleapis.com/customsearch/v1?key=AIzaSyDxVK5ivGLtAjAvVB6fpslj8vHRrGn8siY&cx=822bb8f55521f4067&q=lectures`;
const url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${search}`;
const getData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const result = data.items;
    return result;
  } catch (err) {
    console.log("test", JSON.stringify(err));
  }
};

const WebPage: NextPage<WebPageProps> = async () => {
  const data: Result[] = await getData();
  console.log(JSON.stringify(data, null, 2));
  return <div>hallo</div>;
};

export default WebPage;
