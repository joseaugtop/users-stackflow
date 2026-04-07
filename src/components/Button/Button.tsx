interface ButtonProps {
    className?: string;
    children: React.ReactNode
}

export default function Button({ className, children }: ButtonProps) {
    const padding = className?.match(/p-\d/) ? "" : "p-3";
    return (
        <>
            <button
                className={`${padding} text-center rounded-3xl cursor-pointer ${className}`}
                type="button"
            >
                {children}
            </button>
        </>
    )
}