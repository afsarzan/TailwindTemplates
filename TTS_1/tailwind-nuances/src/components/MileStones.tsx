import React from 'react'

const MileStones = () => {
  return (
     <section className="py-24 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="mb-24 text-center">
                <h2 className="text-3xl font-bold mb-12 text-gray-300">Our Milestones</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="border border-gray-700 p-6 rounded-xl hover:border-brand-yellow transition duration-300 group">
                        <div className="text-5xl font-extrabold text-brand-yellow mb-2 group-hover:scale-110 transition-transform">2015</div>
                        <div className="text-lg font-semibold mb-1">Founded</div>
                        <div className="text-xs text-gray-500">Established with a vision</div>
                    </div>
                    <div className="border border-gray-700 p-6 rounded-xl hover:border-brand-yellow transition duration-300 group">
                        <div className="text-5xl font-extrabold text-brand-yellow mb-2 group-hover:scale-110 transition-transform">2018</div>
                        <div className="text-lg font-semibold mb-1">Expansion</div>
                        <div className="text-xs text-gray-500">Global offices opened</div>
                    </div>
                    <div className="border border-gray-700 p-6 rounded-xl hover:border-brand-yellow transition duration-300 group">
                        <div className="text-5xl font-extrabold text-brand-yellow mb-2 group-hover:scale-110 transition-transform">2020</div>
                        <div className="text-lg font-semibold mb-1">Digital</div>
                        <div className="text-xs text-gray-500">Proprietary AI tools</div>
                    </div>
                    <div className="border border-gray-700 p-6 rounded-xl hover:border-brand-yellow transition duration-300 group">
                        <div className="text-5xl font-extrabold text-brand-yellow mb-2 group-hover:scale-110 transition-transform">2023</div>
                        <div className="text-lg font-semibold mb-1">Leader</div>
                        <div className="text-xs text-gray-500">Fortune 500 Partner</div>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800 pt-16">
                <div className="flex flex-col lg:flex-row gap-16">
                    <div className="lg:w-1/3">
                        <h2 className="text-4xl font-bold mb-4">Strategic Consulting Services</h2>
                        <p className="text-gray-400 mb-8">We offer a wide range of specialized consulting services designed to address every aspect of your business ecosystem.</p>
                        <a href="#contact" className="inline-block bg-transparent border-2 border-brand-yellow text-brand-yellow px-8 py-3 rounded-lg font-bold hover:bg-brand-yellow hover:text-brand-dark transition duration-300">Book Consultation</a>
                    </div>
                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition border border-transparent hover:border-brand-yellow/30">
                            <h4 className="text-brand-yellow font-bold text-lg mb-1">Corporate Strategy</h4>
                            <p className="text-sm text-gray-400">Redefining business models and competitive positioning.</p>
                        </div>
                        <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition border border-transparent hover:border-brand-yellow/30">
                            <h4 className="text-brand-yellow font-bold text-lg mb-1">Mergers & Acquisitions</h4>
                            <p className="text-sm text-gray-400">Due diligence and post-merger integration.</p>
                        </div>
                        <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition border border-transparent hover:border-brand-yellow/30">
                            <h4 className="text-brand-yellow font-bold text-lg mb-1">Sustainability</h4>
                            <p className="text-sm text-gray-400">ESG consulting and green transition strategies.</p>
                        </div>
                        <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition border border-transparent hover:border-brand-yellow/30">
                            <h4 className="text-brand-yellow font-bold text-lg mb-1">Operations</h4>
                            <p className="text-sm text-gray-400">Supply chain optimization and cost reduction.</p>
                        </div>
                        <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition border border-transparent hover:border-brand-yellow/30">
                            <h4 className="text-brand-yellow font-bold text-lg mb-1">Restructuring</h4>
                            <p className="text-sm text-gray-400">Turnaround strategies for underperforming assets.</p>
                        </div>
                        <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-800 transition border border-transparent hover:border-brand-yellow/30">
                            <h4 className="text-brand-yellow font-bold text-lg mb-1">Transformation</h4>
                            <p className="text-sm text-gray-400">Digital acceleration and organizational change.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MileStones