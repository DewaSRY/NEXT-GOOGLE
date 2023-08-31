import style from "./CountryLookUp.module.scss";
import { FC } from "react";

interface CountryLookUpProps {}

const CountryLookUp: FC<CountryLookUpProps> = (): JSX.Element => {
  return <span className={style.Country}>Indonesia</span>;
};

export default CountryLookUp;
