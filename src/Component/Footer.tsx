import style from "./Footer.module.scss";
import { FC } from "react";
import CountryLookUp from "./CountryLookUp";
interface FooterProps {}

const Footer: FC<FooterProps> = (): JSX.Element => {
  return (
    <footer className={style.footer}>
      <CountryLookUp />
      <div>
        <ul>
          <li>About</li>
          <li>Advertising</li>
          <li>Business</li>
          <li>How Search Works</li>
        </ul>
        <ul>
          <li>Privacy</li>
          <li>Terms</li>
          <li>settings</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
