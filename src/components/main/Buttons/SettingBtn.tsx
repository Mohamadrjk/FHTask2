// <button className="text-muted flex items-center gap-x-2">

"use client";
import React, { ReactNode } from "react";
import { Avatar } from "@mui/material";
import Image from "next/image";
interface SettingBtnProps {
  title: String;
}

const SettingBtn = ({ title }: SettingBtnProps) => {
  return (
    <React.Fragment>
      <button className="text-muted flex items-center gap-x-2">
        <span>{title}</span>
        <span
          className=" relative  w-[10px] h-[10px]"
          style={{ rotate: "180deg" }}
        >
          <Image
            alt="back"
            fill
            className="object-cover  bg-blend-color-burn "
            src={"/images/back.png"}
          />
        </span>
      </button>
    </React.Fragment>
  );
};

export default SettingBtn;
