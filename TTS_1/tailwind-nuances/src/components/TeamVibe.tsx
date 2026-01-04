const TeamVibe = () => {
  return (
    <section className="h-80 w-full relative overflow-hidden">
        <img src="https://picsum.photos/seed/teamwork55/1920/600.jpg" alt="Consulting Team" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition duration-700" />
        <div className="absolute inset-0 bg-brand-dark/60 flex items-center justify-center">
            <div className="text-center">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">Excellence in Execution</h3>
                <button className="bg-brand-yellow text-brand-dark px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">Join Our Team</button>
            </div>
        </div>
    </section>
  )
}

export default TeamVibe