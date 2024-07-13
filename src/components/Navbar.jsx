import { motion, useCycle, AnimatePresence } from "framer-motion";
import clsx from 'clsx';
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import { useLocation } from "react-router-dom"; // Import useLocation
import imgref from "./imgref";

const links = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const location = useLocation(); // Get the current pathname
  const [mobileNav, toggleMobileNav] = useCycle(false, true);

  const mobileMenu = (
    <nav className="fixed inset-0 z-[1] left-0 w-full bg-[#030b1d] text-white flex md:hidden flex-col gap-7 items-center pt-[20%] transition">
      <AnimatePresence>
        <motion.div
          variants={{
            open: {
              x: "0%",
            },
            closed: {
              x: "-100%",
            },
          }}
          initial="closed"
          animate="open"
          exit="closed"
        >
          {links.map((link) => (
            <a key={link.name} href={link.href}>
              <p className="uppercase text-md font-bold text-white my-3 py-4 px-4 border-b border-slate-800 hover:border-fuchsia-600 hover:text-fuchsia-600 transition text-center" onClick={() => toggleMobileNav()}>{link.name}</p>
            </a>
          ))}
        </motion.div>
      </AnimatePresence>
    </nav>
  );

  return (
    <>
      <nav className="fixed inset-0 left-0 bg-white z-50 w-full h-[90px]">
        <div className="h-full px-4 xl:px-10 mx-auto">
          <div className="flex justify-between items-center h-full">
            <a href="/">
            <img
              src={imgref.logo}
              alt="Logo"
              className="self-center h-[38px] w-[34px] md:h-[54px] md:w-[50px]"
            />
            </a>
            <div className="flex gap-8 items-center h-full">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={clsx(
                    'underline-animation hover:text-opacity-50 hover:border-b-2 hover:border-black text-xl h-full flex items-center',
                    {
                      'text-gray-400': location.pathname === link.href, // Apply blue color to active link
                      'text-gray-900': location.pathname !== link.href,
                    },
                  )}
                >
                  <p className="hidden md:block text-md font-medium px-4">{link.name}</p>
                </a>
              ))}
              <div className="flex items-center gap-4">
                <div className="block md:hidden ms-8 z-[50]">
                  {mobileNav ? <GrClose className="w-8 h-8 text-white" onClick={() => toggleMobileNav()} /> : <RxHamburgerMenu className="w-8 h-8" onClick={() => toggleMobileNav()} />}
                </div>
              </div>
              {mobileNav && mobileMenu}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
