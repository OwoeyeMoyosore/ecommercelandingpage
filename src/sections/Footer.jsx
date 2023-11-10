import React from "react";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
import { copyrightSign } from "../assets/icons";

const Footer = () => {
  return (
    <footer className="max-container ">
      <div className="flex justify-between items-start flex-wrap gap-20 max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="footerLogo" width={150} height={46} />
          </a>
          <p className="mt-6 text-base font-montserrat text-white-400 leading-7 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size in Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((social, index) => (
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img src={social.src} alt={social.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-wrap justify-between lg:gap-10 gap-20">
          {footerLinks.map((footerLink, index) => (
            <div key={index}>
              <h4 className="text-white font-montserrat text-2xl leading-normal mt-6 font-medium">{footerLink.title}</h4>
              <ul>
                {footerLink.links.map((link, index) => (
                  <li key={index} className="cursor-pointer mt-3 text-white-400 text-base font-montserrat hover:text-slate-gray leading-normal">
<a> {link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
<div className="flex-1 flex justify-start items-center font-montserrat cursor-pointer gap-2">
<img src={copyrightSign} alt="copyright" width={20} height={20} className="rounded-full m-0"/>
<p>Copyright. All rights reserved. </p>
</div>
<p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
