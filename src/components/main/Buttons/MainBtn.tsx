"use client";
import React, { ReactNode } from "react";
import { Avatar } from "@mui/material";

interface MainBtnProps {
  title: String;
}
const MainBtn = ({ title }: MainBtnProps) => {
  return (
    <React.Fragment>
      <div className="flex text-white justify-center w-full items-center my-2">
        <button className=" rounded-full  bg-card  text-xs py-2 px-3 ">{title}</button>
      </div>
    </React.Fragment>
  );
};

export default MainBtn;
