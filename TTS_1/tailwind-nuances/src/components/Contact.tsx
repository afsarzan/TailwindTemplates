import React from 'react'

const Contact = () => {
  return (
     <section id="contact" className="py-24 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                
                <div>
                    <h2 className="text-4xl font-bold text-brand-dark mb-6">Let's talk about your business</h2>
                    <p className="text-gray-500 mb-10 text-lg">Ready to transform your business? Fill out the form or contact us directly using the information below.</p>
                    
                    <div className="space-y-8">
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center text-brand-dark text-xl mr-4 shadow-md">
                                <i className="fas fa-phone-alt"></i>
                            </div>
                            <div>
                                <div className="text-xs text-gray-400 uppercase font-bold tracking-wider">Phone</div>
                                <div className="text-brand-dark font-bold text-lg">+1 (555) 123-4567</div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center text-brand-dark text-xl mr-4 shadow-md">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div>
                                <div className="text-xs text-gray-400 uppercase font-bold tracking-wider">Email</div>
                                <div className="text-brand-dark font-bold text-lg">info@consultpro.com</div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center text-brand-dark text-xl mr-4 shadow-md">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div>
                                <div className="text-xs text-gray-400 uppercase font-bold tracking-wider">Address</div>
                                <div className="text-brand-dark font-bold text-lg">123 Business Ave, NY 10001</div>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-brand-dark mb-2">Name</label>
                                <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-brand-dark mb-2">Email</label>
                                <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition" placeholder="john@example.com"/>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-brand-dark mb-2">Message</label>
                            <textarea rows="4" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition" placeholder="How can we help you?"></textarea>
                        </div>
                        <button type="button" className="w-full bg-brand-dark text-white font-bold py-4 rounded-lg hover:bg-brand-yellow hover:text-brand-dark transition duration-300 transform hover:-translate-y-1">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact