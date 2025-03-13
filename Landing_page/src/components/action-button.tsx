"use client"

export function ActionButton({label, href}: {label: string, href?: string}) {
    if (href) {
        return (
            <a 
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={"relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-white/20 to-white/5 shadow-[0px_0px_12px_rgba(255,255,255,0.5)] inline-block"}
            >
                <div className={"absolute inset-0 rounded-lg"}>
                    <div className={"absolute inset-0 border rounded-lg border-white/20 [mask-image:linear-gradient(to_bottom,black,transparent)]"}/>
                    <div className={"absolute inset-0 border rounded-lg border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"}/>
                    <div className={"absolute inset-0 rounded-lg shadow-[0_0_10px_rgba(255,255,255,0.3)_inset]"}/>
                </div>
                <span>{label}</span>
            </a>
        )
    }

    return (
        <button 
            className={"relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-white/20 to-white/5 shadow-[0px_0px_12px_rgba(255,255,255,0.5)]"}
        >
            <div className={"absolute inset-0 rounded-lg"}>
                <div className={"absolute inset-0 border rounded-lg border-white/20 [mask-image:linear-gradient(to_bottom,black,transparent)]"}/>
                <div className={"absolute inset-0 border rounded-lg border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"}/>
                <div className={"absolute inset-0 rounded-lg shadow-[0_0_10px_rgba(255,255,255,0.3)_inset]"}/>
            </div>
            <span>{label}</span>
        </button>
    )
}
