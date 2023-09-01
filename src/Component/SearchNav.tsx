"use client";
import style from "./SearchNav.module.scss";
import { FC } from "react";
import Link from "next/link";
import { AiOutlineSearch, AiOutlineCamera } from "react-icons/ai";
import { usePathname, useSearchParams } from "next/navigation";
interface SearchNavProps {}

const SearchNav: FC<SearchNavProps> = (): JSX.Element => {
  const pathname = usePathname().split("/")[2];
  const searchParams = useSearchParams();
  const searchTerms = searchParams.get("searchTerm");
  const phatNameIsWeb = pathname === "web";
  return (
    <div className={style.searchNav}>
      <Link
        href={`/search/web?searchTerm=${searchTerms}`}
        className={`${phatNameIsWeb ? style.active : ""}`}
      >
        <AiOutlineSearch />
        search
      </Link>
      <Link
        href={`/search/image?searchTerm=${searchTerms}`}
        className={`${phatNameIsWeb ? "" : style.active}`}
      >
        <AiOutlineCamera />
        image
      </Link>
    </div>
  );
};

export default SearchNav;
