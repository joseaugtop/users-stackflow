type FieldProps<T extends string | number> = {
    state: {
        value: T;
        meta: {
            errors: any[];
            isTouched: boolean;
        }
    }
    handleChange: (value: T) => void;
    handleBlur: () => void
}


export default function TextField<T extends string | number>({
    field,
    type,
    placeholder
}: {
    field: FieldProps<T>
    type?: string
    placeholder?: string
}) {
    const { errors, isTouched } = field.state.meta
    return (
        <div className="flex flex-col">
            <input
                value={field.state.value}
                onChange={(e) =>
                    field.handleChange(
                        (type === "number"
                            ? Number(e.target.value)
                            : e.target.value) as T
                    )
                }
                onBlur={field.handleBlur}
                placeholder={placeholder}
                className="bg-white/10 rounded-3xl p-2" />
            {
                errors.length > 0 && isTouched && (
                    <span className="text-red-500">{errors[0]?.message}</span>
                )
            }
        </div>
    )
}
