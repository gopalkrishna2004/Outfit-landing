"use client"

import React from "react"

export function Features() {
    return (
        <section id="features" className="py-24 bg-black px-6 lg:px-8">
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
    )
}