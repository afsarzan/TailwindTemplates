const Navigation = () => {
  return (
    <div> <nav className="fixed top-0 left-0 w-full bg-brand-dark/95 backdrop-blur text-white z-50 shadow-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
                {/* <!-- Logo --> */}
                <div className="shrink-0">
                    <a href="#" className="text-2xl font-extrabold tracking-tight">
                        CONSULT<span className="text-brand-yellow">PRO</span>
                    </a>
                </div>
                
                {/* <!-- Desktop Menu --> */}
                <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-8">
                        <a href="#home" className="nav-link">Home</a>
                        <a href="#services" className="nav-link">Services</a>
                        <a href="#about" className="nav-link">About</a>
                        <a href="#contact" className="bg-brand-yellow text-brand-dark px-5 py-2.5 rounded-full font-bold hover:bg-white hover:scale-105 transition-all duration-300 shadow-md">Get Started</a>
                    </div>
                </div>

                {/* <!-- Mobile menu button (visual placeholder) --> */}
                <div className="-mr-2 flex md:hidden">
                    <button type="button" className="text-gray-300 hover:text-white p-2">
                        <i className="fas fa-bars text-2xl"></i>
                    </button>
                </div>
            </div>
        </div>
    </nav></div>
  )
}

export default Navigation