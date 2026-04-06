import { z } from "zod"

const UserSchema = z.object({
    username: z.string().min(3),
    age: z.number().int().positive().default(1),
    email: z.string().email().optional()
})

export type User = z.infer<typeof UserSchema>