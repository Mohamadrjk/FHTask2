import React, { ReactNode } from "react";
import { Avatar } from "@mui/material";
import MainBtn from "@/components/main/Buttons/MainBtn";
interface UserProfileData {
  image: String | null;
  firstname: String;
  lastname: String;
  email: String;
}
interface ProfileProps {
  user: UserProfileData;
}
const Profile = ({ user }: ProfileProps) => {
  return (
    <React.Fragment>
      <div className="flex justify-center flex-col items-center mb-2">
        <Avatar
          alt="user profile"
          sx={{
            width: 56,
            height: 56,
          }}
           
          
          src={`${process.env.APP_URL}${user.image}`}
        ></Avatar>
        <div className="text-white text-center  w-full">
          <p className=" font-semibold">{user.firstname + " " + user.lastname}</p>
          <p className="text-muted text-xs">{user.email}</p>
        </div>
        {/* <button className="">Edit profile</button> */}
        <MainBtn title={"Edit Profile"} />
      </div>
    </React.Fragment>
  );
};

export default Profile;
