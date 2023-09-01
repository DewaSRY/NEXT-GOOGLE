/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";
import style from "./SearchHeader.module.scss";
import { FC, useState, FormEventHandler, useEffect } from "react";
import GoogleSearch from "./GoogleSearch";
import { useRouter, useSearchParams } from "next/navigation";
import { NavButton } from "./HomeHeader";
interface SearchHeaderProps {}

const SearchHeader: FC<SearchHeaderProps> = (): JSX.Element => {
  const [search, setSearch] = useState<string>("");
  const searchParams = useSearchParams();
  useEffect(() => {
    const searchTerms = searchParams.get("searchTerm") || "";
    setSearch(searchTerms);
  }, []);
  const router = useRouter();
  const handleSearch = (input: string = search) =>
    !input.trim() ? "" : router.push(`/search/web?searchTerm=${input}`);
  const onSubmitHandler: FormEventHandler = (e) => {
    e.preventDefault();

    handleSearch();
    setSearch("");
  };

  return (
    <header className={style.searchHeader}>
      <img
        width="150"
        height="50"
        src="https://th.bing.com/th/id/R.38aabe0613c4f17945cee40327ac367e?rik=mt2VM9zlD1xy%2bg&riu=http%3a%2f%2forig10.deviantart.net%2f6d95%2ff%2f2015%2f247%2fb%2f9%2fgoogle_2015_logo_high_resolution_png_by_jovicasmileski-d98chn1.png&ehk=lG6D9pljW2Xelus7LJtZjwHHjImg8kBuSVK6TAdwRhk%3d&risl=&pid=ImgRaw&r=0"
        alt="google"
      />
      <span>
        <GoogleSearch
          input={search}
          handelInput={setSearch}
          onSubmitHandler={onSubmitHandler}
        />
      </span>
      <NavButton />
    </header>
  );
};

export default SearchHeader;
