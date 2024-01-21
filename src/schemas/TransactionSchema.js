import z from "zod";

export const transactionSchema = z.object({
  value: z
    .string()
    .min(3, "O valor deve ter mínimo 1 caractere")
    .transform((value) => Number(value)),
  description: z.string().min(2, "A descrição deve ter no mínimo 2 caracteres"),
});
