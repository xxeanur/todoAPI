import {z} from 'zod'
//burada zod şemasını yazdım. Validate middleware var.
export const createUserSchema=z.object({
    email:z.string().email({message:"Invalid email"}),
    username: z.string().min(3, { message: "Username must be at least 3 characters" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
})