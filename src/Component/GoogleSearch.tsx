import { useRouter } from "next/navigation";
import style from "./GoogleSearch.module.scss";
import {
  FC,
  FormEventHandler,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { BsSearch, BsMic, BsCamera } from "react-icons/bs";
interface GoogleSearchProps {
  onSubmitHandler: FormEventHandler;
  input: string;
  handelInput: Dispatch<SetStateAction<string>>;
}

const GoogleSearch: FC<GoogleSearchProps> = ({
  onSubmitHandler,
  input,
  handelInput,
}): JSX.Element => {
  return (
    <form onSubmit={onSubmitHandler} className={style.HomeSearch}>
      <BsSearch onClick={onSubmitHandler} />
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
