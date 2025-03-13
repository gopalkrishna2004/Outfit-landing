"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

export function Faq() {
    const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

    return (
        <>
            {/* Features Section */}
            <section  id="features" className="py-24 bg-black px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <h2 className="text-5xl font-bold text-white text-center mb-16">Features designed for you</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Virtual Wardrobe",
                                description: "Digitize your closet and mix & match outfits anytime",
                                icon: "👕",
                            },
                            {
                                title: "AI-Powered Styling",
                                description: "Discover outfit combinations that match your vibe effortlessly",
                                icon: "🤖",
                            },
                            {
                                title: "Smart Fashion Choices",
                                description: "Shop wisely, maximize your wardrobe, and redefine your style effortlessly.",
                                icon: "🛍️",
                            },
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-2xl bg-white/10 border border-white/10 hover:border-white/30 hover:bg-white/15 transition-all"
                            >
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                                <p className="text-lg text-white/70">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-24 px-6 lg:px-8 bg-black">
                <div className="mx-auto max-w-3xl">
                    <h2 className="text-5xl font-bold text-white text-center mb-16">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            {
                                question: "When is the app launching?",
                                answer: "We're launching soon! Be the first to try it—join the waitlist now! 🚀",
                            },
                            {
                                question: "What are the fees?",
                                answer: "💰₹1,000,000,000,000! Just kidding—it's free to use! 😉🎉",
                            },
                            {
                                question: "How do I get started?",
                                answer: "📥Download, upload your wardrobe, and explore outfits instantly!",
                            }
                            
                        ].map((faq, index) => (
                            <div
                                key={index}
                                className="border border-white/10 rounded-lg overflow-hidden bg-white/5"
                            >
                                <button
                                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/5 text-white font-medium text-lg"
                                    onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                                >
                                    <span>{faq.question}</span>
                                    <ChevronDown
                                        className={`w-5 h-5 transition-transform ${
                                            activeAccordion === index ? "transform rotate-180" : ""
                                        }`}
                                    />
                                </button>
                                {activeAccordion === index && (
                                    <div className="px-6 py-4 bg-white/15">
                                        <p className="text-lg text-gray-300">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
