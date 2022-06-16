import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const Links = [
    { name: "Home", link: "home" },
    { name: "About", link: "about" },
    { name: "Portfolio", link: "portfolio" },
    { name: "Clients", link: "clients" },
    { name: "Contact", link: "contact" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 z-10 w-full shadow-md">
      <div className="items-center justify-between py-4 bg-white md:flex md:px-10 px-7">
        <div className="flex items-center text-2xl font-bold cursor-pointer text-primary">
          arthur darwanto
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute text-3xl transition-all duration-500 ease-in-out cursor-pointer right-8 top-6 md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`absolute pb-12 md:flex md:items-center md:pb-0 md:static bg-white md:z-auto z-[-1] right-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in-out ${
            open ? "top-20 opacity-90" : "top-[-500px]"
          } md:opacity-95 opacity-90 `}
        >
          {Links.map((link) => (
            <li key={link.name} className="text-xl md:ml-8 md:my-0 my-7">
              <Link
                activeClass="active"
                to={link.link}
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
                className="duration-500 cursor-pointer text-slate-500 hover:text-primary"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
