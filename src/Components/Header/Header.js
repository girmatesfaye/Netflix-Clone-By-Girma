import React from "react";
import "./header.css";
import Netflix from "../../Assets/Img/netflix_logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Header = () => {
  return (
    <div className="header_outer_componenet">
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>
              <img src={Netflix} alt="netflix-img" width={100} />
            </li>
            <li>Netflix</li>
            <li>Home</li>
            <li>TVShowe</li>
            <li>Movies</li>
            <li>Leatest</li>
            <li>My List</li>
            <li>Browes my language</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li>
              {" "}
              <SearchIcon />{" "}
            </li>
            <li>
              {" "}
              <NotificationsNoneIcon />{" "}
            </li>
            <li>
              {" "}
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
