interface ButtonProps {
    className?: string;
    children: React.ReactNode;
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
    onClick?: () => void;
}

export default function Button({ className, children, type = "button", onClick }: ButtonProps) {
    const padding = className?.match(/p-\d/) ? "" : "p-3";
    return (
        <>
            <button
                className={`${padding} text-center rounded-3xl cursor-pointer ${className}`}
                type={type}
                onClick={onClick}
            >
                {children}
            </button>
        </>
    )
}