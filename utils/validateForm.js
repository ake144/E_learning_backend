const { z } = require('zod');

const registerSchema = z.object({
  Fname: z.string().min(2).max(30),
  Lname: z.string().min(2).max(30),
  email: z.string().email(),
  password: z.string().min(8),
  type: z.enum(['user', 'admin']),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

module.exports = {
  registerSchema,
  loginSchema,
};
