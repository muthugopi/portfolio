import React, { useState } from "react";

function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const response = await fetch(
                "https://authentication-u5oq.onrender.com/api/portfolio/message",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            const data = await response.json();

            if (response.ok) {
                setStatus("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus(data?.message || "Failed to send message");
            }
        } catch (error) {
            setStatus("Something went wrong. Try again.");
        }
    };

    return (
        <section id="contact" className="w-full min-h-min py-12 sm:py-16 px-4 sm:px-6">

            <div className="flex flex-col mb-12 items-center">
                <h1 className="text-3xl sm:text-4xl md:text-[48px] font-bold bg-gradient-to-r from-indigo-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                    Get In Touch
                </h1>

                <hr className="bg-gradient-to-r from-indigo-400 via-indigo-500 to-purple-500 h-1 w-[120px] sm:w-[150px] rounded mt-3" />

                <p className="text-[16px] sm:text-[18px] text-gray-400 text-center mt-4">
                    Let's discuss your next project or opportunity
                </p>
            </div>

            <div className="max-w-4xl mx-auto grid  px-4 sm:px-6 md:grid-cols-2 gap-8">

                <div className="relative group rounded-2xl">

                    <div className="relative bg-slate-900/80 backdrop-blur-lg p-6 sm:p-8 rounded-2xl border border-slate-700 shadow-lg">

                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                            Contact Me
                        </h2>

                        <form className="space-y-4" onSubmit={handleSubmit}>

                            <input
                                type="text"
                                name="name"
                                placeholder="Emirates"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-2 sm:p-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                required
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="emirates@gmail.com"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-2 sm:p-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                required
                            />

                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-2 sm:p-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                required
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:scale-105 transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>

                        {status && (
                            <p className="mt-4 text-center text-gray-300">{status}</p>
                        )}
                    </div>
                </div>

                <div className="flex flex-col gap-6">

                    <div className="relative group rounded-2xl">
                        <div className="relative bg-slate-900/80 backdrop-blur-lg 
                        p-6 rounded-2xl border border-slate-700 shadow-lg">

                            <h3 className="text-xl font-semibold text-white mb-4">
                                Contact Information
                            </h3>

                            <div className="space-y-3 text-gray-300">
                                <p className="flex items-center gap-3">
                                    <i className="bi bi-envelope-fill text-purple-400"></i>
                                    muthugopij@gmail.com
                                </p>

                                <p className="flex items-center gap-3">
                                    <i className="bi bi-geo-alt-fill text-purple-400"></i>
                                    Seithur, Tamilnadu
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative group rounded-2xl">
                        <div className="relative bg-slate-900/80 backdrop-blur-lg 
                        p-6 rounded-2xl border border-slate-700 shadow-lg">

                            <h3 className="text-xl font-semibold text-white mb-4">
                                Connect With Me
                            </h3>

                            <div className="flex flex-col gap-4">
                                <a
                                    href="https://www.linkedin.com/in/muthugopi-j-848459371/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full px-5 py-3 bg-slate-800 
                                    rounded-lg flex items-center gap-3 text-white
                                    hover:scale-105 transition duration-300"
                                >
                                    <i className="bi bi-linkedin text-blue-400"></i>
                                    LinkedIn
                                </a>

                                <a
                                    href="https://github.com/muthugopi"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full px-5 py-3 bg-slate-800 
                                    rounded-lg flex items-center gap-3 text-white
                                    hover:scale-105 transition duration-300"
                                >
                                    <i className="bi bi-github text-purple-400"></i>
                                    GitHub
                                </a>

                                <a
                                    href="mailto:muthugopij@gmail.com"
                                    className="w-full px-5 py-3 bg-slate-800 
                                    rounded-lg flex items-center gap-3 text-white
                                    hover:scale-105 transition duration-300"
                                >
                                    <i className="bi bi-envelope text-pink-400"></i>
                                    Email
                                </a>
                            </div>

                            <div className="mt-6 flex items-center gap-2">
                                <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                                <p className="text-green-400 font-medium">
                                    Available for Work
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <footer className="mt-20 text-gray-400 h-1 border-t text-center border-white/10">
                <p className="text-gray-400 text-[16px] pt-5">2026 Muthugopi. All rights reserved</p>
                <p className="text-[16px] mt-2 text-gray-500">Built with React, Tailwind CSS</p>
            </footer>

        </section>
    );
}

export default ContactSection;