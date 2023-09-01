import style from "./HomeHeader.module.scss";
import { FC } from "react";
import Link from "next/link";
import { PiDotsNineBold } from "react-icons/pi";
interface HomeHeaderProps {}

interface NavButtonProps {}

export const NavButton: FC<NavButtonProps> = (): JSX.Element => {
  return (
    <span className={style.navButton}>
      <Link href="https://mail.google.com">Gmail</Link>
      <Link href="/">Image</Link>
      <span>
        <PiDotsNineBold />
      </span>
      <button>Sign in</button>
    </span>
  );
};

const HomeHeader: FC<HomeHeaderProps> = (): JSX.Element => {
  return (
    <header className={style.Header}>
      <NavButton />
    </header>
  );
};

export default HomeHeader;
