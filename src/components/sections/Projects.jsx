import RevealOnScroll from "../RevealOnScroll"

function Projects() {
    return <section id="projects" className="min-h-screen flex flex-col items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold md-8 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent text-center">
                Featured projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

            <div className="p-6 mr-2 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                <h3 className="text-xl font-bold mb-2">Social Media Network - Twitter like</h3>
                <p className="text-gray-400 mb-2">Es una red social que esta re piola.. etc</p>
                <div>
                    {["Python", "Django", "JavaScript", "SQL", ].map((tech, key) => (
                        <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                        hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                    {tech}
                </span>
                    ))}
                </div>
                <div className="flex justify-between items-center">
                    <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View project →</a>
                </div>
            </div>
            <div className="p-6 mr-2 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                <h3 className="text-xl font-bold mb-2">Social Media Network - Twitter like</h3>
                <p className="text-gray-400 mb-2">Es una red social que esta re piola.. etc</p>
                <div>
                    {["Python", "Django", "JavaScript", "SQL", ].map((tech, key) => (
                        <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                        hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                    {tech}
                </span>
                    ))}
                </div>
                <div className="flex justify-between items-center">
                    <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View project →</a>
                </div>
            </div>
            <div className="p-6 mr-2 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                <h3 className="text-xl font-bold mb-2">Social Media Network - Twitter like</h3>
                <p className="text-gray-400 mb-2">Es una red social que esta re piola.. etc</p>
                <div>
                    {["Python", "Django", "JavaScript", "SQL", ].map((tech, key) => (
                        <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                        hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                    {tech}
                </span>
                    ))}
                </div>
                <div className="flex justify-between items-center">
                    <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View project →</a>
                </div>
            </div>
            <div className="p-6 mr-2 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                <h3 className="text-xl font-bold mb-2">Social Media Network - Twitter like</h3>
                <p className="text-gray-400 mb-2">Es una red social que esta re piola.. etc</p>
                <div>
                    {["Python", "Django", "JavaScript", "SQL", ].map((tech, key) => (
                        <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                        hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                    {tech}
                </span>
                    ))}
                </div>
                <div className="flex justify-between items-center">
                    <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View project →</a>
                </div>
            </div>
            
        </div>
        </RevealOnScroll>
    </section>
}

export default Projects