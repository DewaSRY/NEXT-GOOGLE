/* eslint-disable @next/next/no-img-element */
"use client";
import style from "./HomeSearch.module.scss";
import { FC, useState, FormEventHandler, useEffect } from "react";
import { BsSearch, BsMic, BsCamera } from "react-icons/bs";
import { useRouter } from "next/navigation";
interface HomeSearchProps {}

const HomeSearch: FC<HomeSearchProps> = (): JSX.Element => {
  const [search, setSearch] = useState<string>("");
  const [searchLoading, setLoading] = useState(false);
  const router = useRouter();
  const onSubmitHandler: FormEventHandler = (e) => {
    e.preventDefault();
    handleSearch();
  };
  const handleSearch = (input: string = search) =>
    !input.trim() ? "" : router.push(`/search/web?searchTerm=${input}`);
  const randomSearch = async (cb: (arg: string) => void) =>
    fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => cb(data[0] as string))
      .then(() => setTimeout(() => setLoading(false), 500));

  return (
    <>
      <form onSubmit={onSubmitHandler} className={style.HomeSearch}>
        <BsSearch />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <BsMic />
        <BsCamera />
      </form>
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
