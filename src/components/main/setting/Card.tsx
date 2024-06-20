import { ReactNode } from "react";
import style from "./Card.module.css";
import Image from "next/image";

interface CardProps {
  title: String;
  children: ReactNode;
}
const SettingCard = ({ title, children }: CardProps) => {
  return (
    <div className="text-white flex flex-col my-3 w-full">
      <h2 className="mb-2 text-sm font-semibold">{title}</h2>
      <div
        className={`${style.card_body} border text-xs   border-gray-700 shadow-sm`}
      >
        <div className={style.card_body_row}>{children}</div>
      </div>
    </div>
  );
};
interface CardRowProps {
  title: String;
  icon: String;
  children: ReactNode;
  className: String | null;
}
export const CardRow = ({ title, icon, children, className }: CardRowProps) => (
  <div className={`${className} flex    py-2 px-3  items-center`}>
    <div className=" relative flex items-center justify-center  w-[20px] h-[20px] mt-2 mr-2">
      <Image
        fill
        className="object-contain "
        alt="security icon"
        src={`${icon}`}
      />
    </div>
    <p className="flex-grow">{title}</p>
    {children}
  </div>
);

export default SettingCard;
// export {CardRow as}
SettingCard.Row = CardRow;
