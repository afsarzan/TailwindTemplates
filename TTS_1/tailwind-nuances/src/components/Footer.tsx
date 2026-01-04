const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div className="col-span-1 md:col-span-2">
                    <a href="#" className="text-2xl font-extrabold tracking-tighter text-white">
                        CONSULT<span className="text-brand-yellow">PRO</span>
                    </a>
                    <p className="mt-4 text-gray-400 max-w-sm leading-relaxed">
                        Designing success for businesses worldwide. We provide expert advice and actionable strategies for growth.
                    </p>
                    <div className="flex space-x-4 mt-6">
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-brand-yellow hover:bg-brand-yellow hover:text-brand-dark transition"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-brand-yellow hover:bg-brand-yellow hover:text-brand-dark transition"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-brand-yellow hover:bg-brand-yellow hover:text-brand-dark transition"><i className="fab fa-facebook-f"></i></a>
                    </div>
                </div>
                <div>
                    <h4 className="text-lg font-bold text-white mb-6">Company</h4>
                    <ul className="space-y-3 text-gray-400">
                        <li><a href="#about" className="hover:text-brand-yellow transition">About Us</a></li>
                        <li><a href="#services" className="hover:text-brand-yellow transition">Services</a></li>
                        <li><a href="#" className="hover:text-brand-yellow transition">Careers</a></li>
                        <li><a href="#" className="hover:text-brand-yellow transition">Privacy Policy</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-bold text-white mb-6">Contact</h4>
                    <ul className="space-y-3 text-gray-400">
                        <li>support@consultpro.com</li>
                        <li>+1 (555) 123-4567</li>
                        <li>New York, NY 10001</li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                &copy; 2023 ConsultPro Inc. All rights reserved.
            </div>
        </div>
    </footer>
  )
}

export default Footer