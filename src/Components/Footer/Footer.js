import React from "react";
import "./footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CopyrightIcon from "@mui/icons-material/Copyright";
const Footer = () => {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        <div className="footer_item">
          <FacebookOutlinedIcon />
          <YouTubeIcon />
          <InstagramIcon />
        </div>
        <div className="footer_data">
          <div>
            <ul>
              <li>Audio description</li>
              <li>Invester Relation</li>
              <li>Legal Notice</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Help center</li>
              <li>Jobs</li>
              <li>Cookies Preference</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Card</li>
              <li>Term to use</li>
              <li>Corporate Informstion</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media center</li>
              <li>Privacy</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
        <div className="service_code">
          <p>Service code</p>
        </div>
        <div className="copy_right">
          {" "}
          <CopyrightIcon />: 1997-2024 Netflix, Ethiopia
        </div>
      </div>
    </div>
  );
};

export default Footer;
