/* eslint-disable @next/next/no-img-element */
"use client";
import style from "./HomeSearch.module.scss";
import { FC, FormEventHandler, useState } from "react";

import { useRouter } from "next/navigation";
import GoogleSearch from "./GoogleSearch";
interface HomeSearchProps {}

const HomeSearch: FC<HomeSearchProps> = (): JSX.Element => {
  const [searchLoading, setLoading] = useState(false);
  const [search, setSearch] = useState<string>("");

  const randomSearch = async (cb: (arg: string) => void) =>
    fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => cb(data[0] as string))
      .then(() => setTimeout(() => setLoading(false), 500));
  const router = useRouter();
  const handleSearch = (input: string = search) =>
    !input.trim() ? "" : router.push(`/search/web?searchTerm=${input}`);
  const onSubmitHandler: FormEventHandler = (e) => {
    e.preventDefault();
    handleSearch();
    setSearch("");
  };
  return (
    <>
      <GoogleSearch
        input={search}
        handelInput={setSearch}
        onSubmitHandler={onSubmitHandler}
      />
      <div className={style.HomeButton}>
        <button onClick={() => handleSearch()}>Google Search</button>
        <button
          onClick={() => {
            randomSearch(handleSearch);
            setLoading(true);
          }}
        >
          {searchLoading ? (
            <img src="/spinier.svg" alt="spinier" />
          ) : (
            "I am fearing Lucky"
          )}
        </button>
      </div>
    </>
  );
};

export default HomeSearch;
