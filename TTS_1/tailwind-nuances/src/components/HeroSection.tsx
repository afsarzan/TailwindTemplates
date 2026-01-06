const HeroSection = () => {
  return (
    <header id="home" className="relative bg-brand-dark text-white pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
                <div className="inline-block bg-brand-yellow/10 border border-brand-yellow text-brand-yellow px-4 py-1 rounded-full text-sm font-semibold mb-6">
                    Software Development Consulting Firm
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
                    Crafting <span className="text-brand-yellow">Softwares.</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 mb-10 font-light max-w-2xl">
                    Over <span className="text-white font-semibold">ALL</span> web related activites covered.
                </p>
                <div className="flex flex-wrap gap-4">
                    <a href="#contact" className="bg-brand-yellow text-brand-dark px-8 py-4 rounded-lg font-bold text-lg hover:bg-white transition duration-300 shadow-[0_0_20px_rgba(234,179,8,0.3)]">
                        Request Your Project
                    </a>
                    <a href="#services" className="border border-gray-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:border-brand-yellow hover:text-brand-yellow transition duration-300">
                        Our Services
                    </a>
                </div>
            </div>
        </div>
       
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-yellow rounded-full mix-blend-multiply filter blur-[128px] opacity-10 pointer-events-none"></div>
    </header>
  )
}

export default HeroSection