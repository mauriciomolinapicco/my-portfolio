import RevealOnScroll from "../RevealOnScroll";


function About() {


    const backendSkills = ['Python', 'Django', 'FastAPI', 'SQL', 'Docker', 'AWS'];
    const frontendSkills = ['Javascript', 'React', 'Tailwind']

    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold md-8 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent text-center">About me</h2>
        
            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6s">
                    Passionate developer with expertise in building the best software solutions
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl gont-bold mb-4">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech) => (
                                <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                                hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl gont-bold mb-4">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech) => (
                                <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                                hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold">📖 Education </h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong>Software Engineering</strong> - Universidad de Palermo - Buenos Aires
                            </li>
                            <li>
                                <strong>Information Systems Engineering</strong> - Unviersidad Tecnologica Nacional - Cordoba
                            </li>
                            <li>
                                <strong>Relevant Coursework:</strong> - Data Structures, Web Development, Software Arquitechture
                            </li>
                        </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold">💼 Work Experience </h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold">Full Stack Developer at Rooster Software Barn</h4>
                                <p>Developed and maintained full stack web applications</p>
                            </div>
                            <div>
                                <h4 className="font-semibold">Independant software developer - Freelancer</h4>
                                <p>Developed and maintained full stack web applications</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </RevealOnScroll>
    </section>
}

export default About