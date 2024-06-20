import Image from "next/image";
import Header from "@/components/main/Header/Header";
import SettingCard from "@/components/main/setting/Card";
import { Avatar } from "@mui/material";
import Profile from "@/components/main/setting/profile";
import IOSSwitchBtn from "@/components/main/Buttons/IOSSwitch";
import SettingBtn from "@/components/main/Buttons/SettingBtn";
const sampleUser = {
  firstname: "John",
  lastname: "Doe",
  email: "j.Doe@gmail.com",
  image: "/images/Avatar.png",
};
export default function Home() {
  return (
    <main className="page_content flex  max-w-[320px] min-w-[320px]  min-h-screen flex-col items-center  p-4 ">
      <Header
        title={"Settings"}
        headerIcon={
          <button className=" relative  w-[20px] h-[20px]">
            <Image
              alt="'back"
              fill
              className="    object-cover "
              src={"/images/back.png"}
            />
          </button>
        }
      ></Header>
      <Profile user={sampleUser} />
      <SettingCard title={"General"}>
        <SettingCard.Row title={"Security"} className={"rounded-t-lg"} icon={"/images/faceID.png"}>
          <SettingBtn title={"FaceID"} />
        </SettingCard.Row>
        <SettingCard.Row title={"iCloud Sync"} className={"rounded-b-lg"} icon={"/images/Vector.png"}>
          <IOSSwitchBtn />
        </SettingCard.Row>
      </SettingCard>
      <SettingCard title={"My subscriptions"}>
        <SettingCard.Row title={"Sorting"} className={"rounded-t-lg"} icon={"/images/Sorting.png"}>
          <SettingBtn title={"Date"} />
        </SettingCard.Row>
        <SettingCard.Row title={"Summary"} className={"rounded-0"} icon={"/images/Chart.png"}>
          <SettingBtn title={"Average"} />
        </SettingCard.Row>
        <SettingCard.Row title={"Default currency"} className={"rounded-b-lg"} icon={"/images/Money.png"}>
          <SettingBtn title={"USD ($)"} />
        </SettingCard.Row>
      </SettingCard>
      <SettingCard title={"Appearance"}>
        <SettingCard.Row      className={"rounded-t-lg"} title={"App icon"} icon={"/images/AppIcon.png"}>
          <SettingBtn title={"Default"} />
        </SettingCard.Row>
        <SettingCard.Row
          className={"rounded-b-lg"}
          title={"Theme"}
          icon={"/images/LightTheme.png"}
        >
          <SettingBtn title={"Dark"} />
        </SettingCard.Row>
      </SettingCard>
    </main>
  );
}
