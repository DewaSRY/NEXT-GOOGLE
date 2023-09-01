import SearchHeader from "@/Component/SearchHeader";
import SearchNav from "@/Component/SearchNav";
import { NextPage } from "next";
import { ReactNode } from "react";
interface layoutProps {
  children: ReactNode;
}

const layout: NextPage<layoutProps> = ({ children }) => {
  return (
    <div>
      <SearchHeader />
      <SearchNav />
      {children}
    </div>
  );
};

export default layout;
