
const MaximizeValue = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2 relative">
                    <div className="absolute -inset-4 bg-brand-yellow rounded-2xl opacity-20 transform rotate-3"></div>
                    <img src="https://picsum.photos/seed/consulting99/600/500.jpg" alt="Team Meeting" className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]" />
                    <div className="absolute bottom-8 left-8 bg-white p-6 rounded-xl shadow-lg max-w-xs hidden md:block">
                        <p className="text-brand-dark font-bold text-lg">"The best investment we ever made."</p>
                        <div className="mt-2 text-sm text-gray-500">- CEO, TechCorp</div>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <h2 className="text-5xl font-extrabold text-brand-dark mb-6 leading-tight">We maximize added value for our clients</h2>
                    <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                        We don't just give advice; we partner with you to implement sustainable growth strategies. Our approach is data-centric, focusing on long-term value rather than short-term fixes.
                    </p>
                    
                    <div className="space-y-4 mb-8">
                        <div className="flex items-center p-4 bg-brand-gray rounded-lg">
                            <div className="bg-brand-yellow text-brand-dark w-10 h-10 rounded-full flex items-center justify-center mr-4 shrink-0">
                                <i className="fas fa-check"></i>
                            </div>
                            <span className="font-medium text-brand-dark">Customized strategic planning</span>
                        </div>
                        <div className="flex items-center p-4 bg-brand-gray rounded-lg">
                            <div className="bg-brand-yellow text-brand-dark w-10 h-10 rounded-full flex items-center justify-center mr-4 shrink-0">
                                <i className="fas fa-check"></i>
                            </div>
                            <span className="font-medium text-brand-dark">Operational efficiency improvement</span>
                        </div>
                        <div className="flex items-center p-4 bg-brand-gray rounded-lg">
                            <div className="bg-brand-yellow text-brand-dark w-10 h-10 rounded-full flex items-center justify-center mr-4 shrink-0">
                                <i className="fas fa-check"></i>
                            </div>
                            <span className="font-medium text-brand-dark">Risk management & mitigation</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MaximizeValue