import { ReactNode } from "react";

import style from "./header.module.css";
interface HeaderProps {
  title: String | null;
  headerIcon: ReactNode | String;
}
const Header = ({ headerIcon, title }: HeaderProps) => {
  return (
    <nav className={style.nav_container}>
      <div className={style.nav_icon}>{headerIcon}</div>
      <div className={style.nav_title}>{title}</div>
    </nav>
  );
};

export default Header;
