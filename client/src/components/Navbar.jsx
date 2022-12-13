// create a tailwind glassmorphism navbar
const Navbar = () => {
  return (
    <nav className="bg-gray-100 bg-opacity-25 backdrop-filter backdrop-blur-lg bg-blend-overlay">
      <div className="container mx-auto">
        <div className="relative flex items-center justify-between h-16">
          <div>
            <a
              href="/"
              className="text-gray-900 text-2xl font-bold tracking-wider"
            >
              <span className="text-blue-500">Y</span>oga
              <span className="text-blue-500">C</span>lub
            </a>
          </div>
          <div>
            <a
              href="#"
              className="text-gray-900 text-xl font-bold tracking-wider"
            >
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
