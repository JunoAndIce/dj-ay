import logo from "../assets/images/logo.webp"


function Navbar() {
  return (
    <section data-scroll-sticky className='navbar'>
      <nav className="p-4 flex flex-row items-center">
        <img alt="" className="p-2" src={(logo)}></img>

        <span className="p-2 text-sm/1 basis-64 list-none font-thin text-sm">
          <li>Ekemini Ekwere</li>
          <li>Based in TX</li>
        </span>
      </nav>
    </section>

  );
}

export default Navbar;