import React from "react";
import HomeHeader from "./home-header";

export default function Parent({ children }) {
  return (
    <>
      <HomeHeader />
      {children}
    </>
  );
}
