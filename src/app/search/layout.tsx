import { NextPage } from "next";
import { ReactNode } from "react";
interface layoutProps {
  children: ReactNode;
}

const layout: NextPage<layoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default layout;
