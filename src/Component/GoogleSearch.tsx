import style from "./GoogleSearch.module.scss";
import {
  FC,
  FormEventHandler,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { BsSearch, BsMic, BsCamera } from "react-icons/bs";
import { useRouter } from "next/navigation";
interface GoogleSearchProps {
  input: string;
  handelInput: Dispatch<SetStateAction<string>>;
  handleSearch: (arg: string) => void;
}

const GoogleSearch: FC<GoogleSearchProps> = ({
  input,
  handleSearch,
  handelInput,
}): JSX.Element => {
  const onSubmitHandler: FormEventHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleSearch(input);
  };

  return (
    <form onSubmit={onSubmitHandler} className={style.HomeSearch}>
      <BsSearch />
      <input
        type="text"
        value={input}
        onChange={(e) => handelInput(e.target.value)}
      />
      <BsMic />
      <BsCamera />
    </form>
  );
};

export default GoogleSearch;
