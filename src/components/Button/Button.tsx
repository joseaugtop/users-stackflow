interface ButtonProps {
    className?: string;
    children: React.ReactNode;
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

export default function Button({ className, children, type }: ButtonProps) {
    const padding = className?.match(/p-\d/) ? "" : "p-3";
    return (
        <>
            <button
                className={`${padding} text-center rounded-3xl cursor-pointer ${className}`}
                type={`${type ? type : 'button'}`}
            >
                {children}
            </button>
        </>
    )
}