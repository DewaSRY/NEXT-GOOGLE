"use client";

import { error } from "console";
import { NextPage } from "next";
import { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const Error: NextPage<ErrorProps> = ({ error, reset }) => {
  useEffect(() => {
    console.log("Error", error);
  }, [error]);
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        maxWidth: "100rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>Some thing was wrong</h2>
      <button onClick={() => reset}>Try Again</button>
    </div>
  );
};

export default Error;
