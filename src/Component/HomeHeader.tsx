import style from "./HomeHeader.module.scss";
import { FC } from "react";
import Link from "next/link";
import { PiDotsNineBold } from "react-icons/pi";
interface HomeHeaderProps {}

const HomeHeader: FC<HomeHeaderProps> = (): JSX.Element => {
  return (
    <header className={style.Header}>
      <div>
        <Link href="https://mail.google.com">Gmail</Link>
        <Link href="/">Image</Link>
        <span>
          <PiDotsNineBold />
        </span>
        <button>Sign in</button>
      </div>
    </header>
  );
};

export default HomeHeader;
