import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "../HeaderOption/HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import { useSelector } from "react-redux";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  console.log(user);
  const logOutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header-left">
        <img
          src="https://i.ibb.co/D83KL2j/proflinkr.png"
          alt="Linkedin Logo"
        />
        <div className="header-search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header-right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        {
        user==null?(<></>):(<HeaderOption
          onClick={logOutOfApp}
          title={"Logout"}
          avatar={true}
        />)
      }
      </div>
    </div>
  );
}

export default Header;
