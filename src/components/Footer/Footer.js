import React from "react";
import "./Footer.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <footer>
        <p>{`Copyright © Code ${year}`}</p>
        <ul>
          <li>
            <a href="https://youtube.com">
              <YouTubeIcon className="utube" fontSize="large" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com">
              <FacebookIcon className="facebook" fontSize="large" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com">
              <InstagramIcon className="instagram" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
