const Services = () => {
  return (
    <section id="services" className="py-24 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl font-bold text-brand-dark mb-4">We'll help manage your business</h2>
                <div className="w-24 h-1.5 bg-brand-yellow mx-auto rounded-full"></div>
                <p className="mt-4 text-lg text-gray-500">Comprehensive solutions tailored to your specific industry challenges.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* <!-- Block 1 --> */}
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border-b-4 border-transparent hover:border-brand-yellow group">
                    <div className="w-14 h-14 bg-brand-gray group-hover:bg-brand-yellow rounded-xl flex items-center justify-center mb-6 transition-colors">
                        <i className="fas fa-shield-alt text-2xl text-brand-dark group-hover:text-brand-dark transition-colors"></i>
                    </div>
                    <h3 className="text-xl font-bold text-brand-dark mb-3">Anti-crisis</h3>
                    <p className="text-gray-500">Strategic interventions to stabilize your business during turbulent economic times.</p>
                </div>

                {/* <!-- Block 2 --> */}
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border-b-4 border-transparent hover:border-brand-yellow group">
                    <div className="w-14 h-14 bg-brand-gray group-hover:bg-brand-yellow rounded-xl flex items-center justify-center mb-6 transition-colors">
                        <i className="fas fa-chart-pie text-2xl text-brand-dark group-hover:text-brand-dark transition-colors"></i>
                    </div>
                    <h3 className="text-xl font-bold text-brand-dark mb-3">Financial Audit</h3>
                    <p className="text-gray-500">Comprehensive analysis of financial health to ensure compliance and profitability.</p>
                </div>

                {/* <!-- Block 3 --> */}
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border-b-4 border-transparent hover:border-brand-yellow group">
                    <div className="w-14 h-14 bg-brand-gray group-hover:bg-brand-yellow rounded-xl flex items-center justify-center mb-6 transition-colors">
                        <i className="fas fa-users text-2xl text-brand-dark group-hover:text-brand-dark transition-colors"></i>
                    </div>
                    <h3 className="text-xl font-bold text-brand-dark mb-3">HR Optimization</h3>
                    <p className="text-gray-500">Restructuring teams and improving organizational culture for efficiency.</p>
                </div>

                {/* <!-- Block 4 --> */}
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border-b-4 border-transparent hover:border-brand-yellow group">
                    <div className="w-14 h-14 bg-brand-gray group-hover:bg-brand-yellow rounded-xl flex items-center justify-center mb-6 transition-colors">
                        <i className="fas fa-bullseye text-2xl text-brand-dark group-hover:text-brand-dark transition-colors"></i>
                    </div>
                    <h3 className="text-xl font-bold text-brand-dark mb-3">Marketing Strategy</h3>
                    <p className="text-gray-500">Data-driven campaigns to expand market reach and boost brand recognition.</p>
                </div>

                {/* <!-- Block 5 --> */}
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border-b-4 border-transparent hover:border-brand-yellow group">
                    <div className="w-14 h-14 bg-brand-gray group-hover:bg-brand-yellow rounded-xl flex items-center justify-center mb-6 transition-colors">
                        <i className="fas fa-gavel text-2xl text-brand-dark group-hover:text-brand-dark transition-colors"></i>
                    </div>
                    <h3 className="text-xl font-bold text-brand-dark mb-3">Legal Consulting</h3>
                    <p className="text-gray-500">Navigating complex regulations and minimizing legal risks for your corporation.</p>
                </div>

                {/* <!-- Block 6 --> */}
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border-b-4 border-transparent hover:border-brand-yellow group">
                    <div className="w-14 h-14 bg-brand-gray group-hover:bg-brand-yellow rounded-xl flex items-center justify-center mb-6 transition-colors">
                        <i className="fas fa-lightbulb text-2xl text-brand-dark group-hover:text-brand-dark transition-colors"></i>
                    </div>
                    <h3 className="text-xl font-bold text-brand-dark mb-3">Innovation Mgmt</h3>
                    <p className="text-gray-500">Implementing new technologies and methodologies to stay ahead of competitors.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services