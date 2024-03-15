import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black py-8 text-center text-white">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <a href="https://www.facebook.com" className="mr-4">
            <FaFacebook className="text-white text-2xl" />
          </a>
          <a href="https://www.instagram.com" className="mr-4">
            <FaInstagram className="text-white text-2xl" />
          </a>
          <a href="https://twitter.com" className="mr-4">
            <FaTwitter className="text-white text-2xl" />
          </a>
          <a href="https://www.linkedin.com" className="mr-4">
            <FaLinkedin className="text-white text-2xl" />
          </a>
          <a href="https://www.youtube.com" className="mr-4">
            <FaYoutube className="text-white text-2xl" />
          </a>
          <a href="https://github.com">
            <FaGithub className="text-white text-2xl" />
          </a>
        </div>
        <p className="mt-4">Copyright &copy; 2022. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
