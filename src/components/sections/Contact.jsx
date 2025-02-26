import { useState } from "react"
import RevealOnScroll from "../RevealOnScroll"
import emailjs from 'emailjs-com'

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then((result) => {
            alert("Message Sent!")
            setFormData({name:"", email:"", message:""})
        }).catch(() => alert("Oops.. Something went wrong. Please try again"))
    }

    return <section id="contact" className="min-h-screen flex items-center justify-center py-20"> 
    <RevealOnScroll>
        <div className="px-4 w-150">
            <h2 className="text-3xl font-bold md-8 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent text-center">Get In Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative mt-4">
                    <input value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} type="text" name="name" id="name" required placeholder="Name..." className="w-full bg-white/5 border border-white rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" />
                </div>
                <div className="relative mt-4">
                    <input value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} type="email" name="email" id="email" required placeholder="example@email.com" className="w-full bg-white/5 border border-white rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" />
                </div>
                <div className="relative mt-4">
                    <textarea value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} type="message" rows={5} name="message" id="message" required placeholder="Write a message..." className="w-full bg-white/5 border border-white rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" />
                </div>

                <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">Send message</button>
            </form>
        </div>
    </RevealOnScroll>
    </section>
}

export default Contact