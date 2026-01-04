
const Statistic = () => {
  return (
   <section id="stats" className="py-20 bg-brand-yellow text-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4 text-center">
                <div>
                    <div className="text-6xl font-black mb-2 tracking-tighter">17</div>
                    <div className="font-bold uppercase tracking-widest text-sm opacity-70">Awards Won</div>
                </div>
                <div>
                    <div className="text-6xl font-black mb-2 tracking-tighter">12+</div>
                    <div className="font-bold uppercase tracking-widest text-sm opacity-70">Years Experience</div>
                </div>
                <div>
                    <div className="text-6xl font-black mb-2 tracking-tighter">108</div>
                    <div className="font-bold uppercase tracking-widest text-sm opacity-70">Global Clients</div>
                </div>
                <div>
                    <div className="text-6xl font-black mb-2 tracking-tighter">150</div>
                    <div className="font-bold uppercase tracking-widest text-sm opacity-70">Projects Done</div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Statistic