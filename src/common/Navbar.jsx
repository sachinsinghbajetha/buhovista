const Navbar = () => {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 py-6 px-6 lg:px-12 lg:px-24 backdrop-blur-[20px]"
      style={{
        background:
          "linear-gradient(rgba(255, 255, 255, 0.22) 0%, rgba(89, 89, 89, 0.12) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          {/* Logo Placeholder mimicking the shape */}
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="logo" className="w-[28px] h-[23px]" />
            <span className="text-sm font-medium font-poppins leading-normal lg:leading-4">
              BuhoVista
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-8">
            <a
              href="#"
              className="text-gray-600 hover:text-dark font-medium text-xs leading-normal lg:leading-3.5 transition-colors"
            >
              Solutions
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-dark font-medium text-xs leading-normal lg:leading-3.5 transition-colors"
            >
              Buho AI
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-dark font-medium text-xs leading-normal lg:leading-3.5 transition-colors"
            >
              Pilot
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-dark font-medium text-xs leading-normal lg:leading-3.5 transition-colors"
            >
              About
            </a>
          </div>
        </div>

        <button className="px-4 py-2 font-dmsans bg-black text-white rounded-full text-xs leading-normal lg:leading-3.5 cursor-pointer">
          Book Demo
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
