import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import imgref from "./imgref";


const footerLinks = [

    {
        label: "Company",
        links: [
          { text: "About Us", href: "/about" },
          { text: "Culture", href: "#" },
          { text: "Join Our Team", href: "#" },
          { text: "Contact Us", href: "#" },
        ],
      },
  {
    label: "Industries",
    links: [
      { text: "Oil and Gas", href: "#" },
      { text: "Power Generation", href: "#" },
      { text: "Industrial Facilities", href: "#" },
      { text: "Process Plants", href: "#" },
    ],
  },
  
  
  {
    label: "Address",
    links: [
      { text: "B15, James Pinnock's Place, Pinnock Beach Estate,Lekki, Lagos, Nigeria.", href: "#" },
      
    ],
  },
];

const socialMediaLinks = [
  { icon: <FaTwitter className="text-black  text-lg" />, href: "#" },
  { icon: <FaFacebook className="text-black  text-lg" />, href: "#" },
  { icon: <FaInstagram className="text-black  text-lg" />, href: "#" },
  { icon: <FaYoutube className="text-black   text-lg" />, href: "#" },
  { icon: <FaLinkedin className="text-black  text-lg" />, href: "#" },
];

export default function Footer() {

  return (
    <footer className="w-full bg-[#030b1d] flex justify-center">
      <div className="w-full max-w-[1320px] px-5 py-10 flex flex-col mx-auto">
        <div className="flex flex-col">
            <div className="flex gap-2 items-center">
          <div className="bg-white w-[50px] flex justify-center items-center rounded">
            <a href={"#"}>
              <img
                src={imgref.logo}
                className="h-[42px] "
                alt="Logo"
              />
            </a>
          </div>
          <div className="flex">
            <h3 className="text-white font-bold text-lg">BAIL</h3>
          </div>
            </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.7fr] gap-10 lg:gap-[96px] pb-10">
            <div className="flex flex-col">
              <p className="text-[#FFFFFF] text-opacity-70  font-medium leading-[157.1%] text-sm mt-4 max-w-[500px]">
              Broad Asset Integrity Limited (BAIL) is a provider of heat exchanger maintenance and asset integrity management solutions. We specialize in heat exchanger services, offering comprehensive cleaning, inspection, maintenance, and performance optimization to ensure your operations run smoothly and efficiently.
              </p>
             
            </div>
            <div className="grid grid-cols-2  md:grid-cols-3 gap-6 text-[#fff] font-medium text-sm ">
              {footerLinks.map((item, index) => (
                <div key={index} className="pb-4 md:pb-0">
                  <h4 className="font-bold pb-3">{item.label}</h4>
                  <ul className="flex flex-col gap-3">
                    {item.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.href}
                          className="text-[#FFFFFF] text-opacity-70 "
                        >
                          {link.text}{" "}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        
          <div className="border-t border-[#BDD7EE] border-opacity-15 ">
            <div className="pt-4 flex flex-col md:flex-row justify-between md:items-center items-start w-full font-medium text-[#FFFFFF] text-opacity-40 text-sm pb-10">
              <p>Copyright © 2024, BAIL</p>
              <div className="flex gap-2 mt-5 md:mt-0 flex-wrap">
                  {socialMediaLinks.map((socialMedia, index) => (
                    <a
                      key={index}
                      href={socialMedia.href}
                      className="w-[42px] h-[42px] rounded-full bg-gray-300 hover:bg-gray-50 flex justify-center items-center "
                    >
                      {socialMedia.icon}
                    </a>
                  ))}
                </div>
            </div>
          </div>
        </div>
      </div>
      
    </footer>
  );
}