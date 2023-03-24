import { RegisterContainer, RegisterForm } from "@/styles/components/register";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const RegisterFormSchema = z.object({
  fullName: z.string().min(6),
  email: z.string().email(),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
});

type RegisterFormType = z.infer<typeof RegisterFormSchema>;

export function Register() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<RegisterFormType>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function handleRegister(data: RegisterFormType) {
    const { fullName, email, password, confirmPassword } = data;
    alert(
      `FullName: ${fullName} Email: ${email} Password: ${password} ConfirmPassword: ${confirmPassword}`
    );
    reset();
  }

  return (
    <RegisterContainer>
      <h1>Register</h1>
      <p>Enter your credential information</p>

      <RegisterForm onSubmit={handleSubmit(handleRegister)}>
        <input
          type="text"
          placeholder="Full Name"
          required
          disabled={isSubmitting}
          {...register("fullName")}
        />
        <input
          type="email"
          placeholder="Email"
          required
          disabled={isSubmitting}
          {...register("email")}
        />
        <input
          type="password"
          placeholder="Password"
          disabled={isSubmitting}
          required
          {...register("password")}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          disabled={isSubmitting}
          required
          {...register("confirmPassword")}
        />
        <input type="submit" value="Sign Up" disabled={isSubmitting} />
      </RegisterForm>
    </RegisterContainer>
  );
}
