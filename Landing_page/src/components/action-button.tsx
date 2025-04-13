"use client"

export function ActionButton({
    label, 
    href, 
    type, 
    className, 
    disabled
}: {
    label: string, 
    href?: string, 
    type?: "button" | "submit" | "reset", 
    className?: string, 
    disabled?: boolean
}) {
    // Process the label text to ensure words appear side by side
    const renderLabel = () => {
        return (
            <span className="text-center whitespace-nowrap">{label}</span>
        );
    };

    if (href) {
        return (
            <a 
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative py-3 px-5 rounded-lg font-medium text-base bg-gradient-to-b from-white/20 to-white/5 shadow-[0px_0px_12px_rgba(255,255,255,0.5)] inline-block text-center ${className || ""}`}
            >
                <div className={"absolute inset-0 rounded-lg"}>
                    <div className={"absolute inset-0 border rounded-lg border-white/20 [mask-image:linear-gradient(to_bottom,black,transparent)]"}/>
                    <div className={"absolute inset-0 border rounded-lg border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"}/>
                    <div className={"absolute inset-0 rounded-lg shadow-[0_0_10px_rgba(255,255,255,0.3)_inset]"}/>
                </div>
                {renderLabel()}
            </a>
        )
    }

    return (
        <button 
            type={type || "button"}
            disabled={disabled}
            className={`relative py-3 px-5 rounded-lg font-medium text-base bg-gradient-to-b from-white/20 to-white/5 shadow-[0px_0px_12px_rgba(255,255,255,0.5)] text-center ${disabled ? "opacity-60 cursor-not-allowed" : ""} ${className || ""}`}
        >
            <div className={"absolute inset-0 rounded-lg"}>
                <div className={"absolute inset-0 border rounded-lg border-white/20 [mask-image:linear-gradient(to_bottom,black,transparent)]"}/>
                <div className={"absolute inset-0 border rounded-lg border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"}/>
                <div className={"absolute inset-0 rounded-lg shadow-[0_0_10px_rgba(255,255,255,0.3)_inset]"}/>
            </div>
            {renderLabel()}
        </button>
    )
}
