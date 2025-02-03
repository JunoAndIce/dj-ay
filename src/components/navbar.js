import logo from "../assets/images/logo.webp"
import Menu from "./menu";

import React from "react";
import useVanillaTilt from "../hooks/useVanillaTilt";
import { useMenu } from "../context/menuContext"; 


function Navbar() {

  const { toggleMenu } = useMenu();


  const tiltRef = useVanillaTilt({
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.5
  });

  return (
    <section data-scroll-sticky className='navbar'>
      <nav className="p-4 z-40 flex flex-row items-center fixed w-screen">
        <div ref={tiltRef} style={{ width: "50px"}}>
          <img onClick={toggleMenu}
            alt=""
            className="cursor-pointer p-2 m-auto"
            src={(logo)}></img>
        </div>


        <span className="p-2 text-sm/1 basis-64 list-none font-thin text-sm hel_neu">
          <li>Ekemini Ekwere</li>
          <li>Based in TX</li>
        </span>
      </nav>

      <Menu />
    </section>

  );
}

export default Navbar;