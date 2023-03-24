import {
  LoginContainer,
  LoginForm,
  LoginOptionsContainer,
  RememberMeContainer,
} from "@/styles/components/login";
import * as z from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  rememberMe: z.boolean(),
});

type LoginFormType = z.infer<typeof LoginFormSchema>;

export function Login() {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormType>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  async function handleLogin(data: LoginFormType) {
    const { email, password, rememberMe } = data;
    alert(`Email: ${email} Password: ${password} RememberMe: ${rememberMe}`);
    reset();
  }

  return (
    <LoginContainer>
      <h1>Login</h1>
      <p>Enter your login information</p>

      <LoginForm onSubmit={handleSubmit(handleLogin)}>
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
        <LoginOptionsContainer>
          <RememberMeContainer>
            <input
              type="checkbox"
              id="remember"
              disabled={isSubmitting}
              {...register("rememberMe")}
            />
            <label htmlFor="remember">Remember me</label>
          </RememberMeContainer>
          <a href="#">Forgot password?</a>
        </LoginOptionsContainer>
        <input type="submit" value="Sign In" disabled={isSubmitting} />
      </LoginForm>
    </LoginContainer>
  );
}
