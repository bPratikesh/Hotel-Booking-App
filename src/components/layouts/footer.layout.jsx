import { FOOTER_SECTION } from "@/config/app.config";
import dayjs from "dayjs";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-secondary">
      <footer className="container">
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(190px,1fr))] py-4 gap-6">
          {FOOTER_SECTION.map((section, index) => (
            <div key={index} className="flex flex-col gap-3">
              <h3 className="text-sm font-bold">{section.title}</h3>
              <ul className="flex flex-col gap-1">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-sm hover:underline">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className="bg-brand h-15 p-5">
        <div className="flex justify-end pr-15">
          <p className="text-sm text-white">
            Copyright &copy;{" "}
            {`${dayjs().year()} Booking.com. All rights reserved.`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
