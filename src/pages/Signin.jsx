import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import Button from "../components/Button";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorInput from "../components/ErrorInput";
import { signinSchema } from "../schemas/SigninSchema";

export default function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signinSchema) });

  function handleSubmitForm(data) {
    console.log(data);
  }

  return (
    <div className="flex flex-col items-center justify-around rounded p-8 w-[32rem] h-[32rem] bg-zinc-900 ">
      <img src={logo} alt="" className="w-44" />
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="flex flex-col justify-center w-full gap-2"
      >
        <Input
          type="email"
          placeholder="Email"
          register={register}
          name="email"
        />
        {errors.email && <ErrorInput text={errors.email.message} />}
        <Input
          type="password"
          placeholder="Password"
          register={register}
          name="password"
        />
        {errors.password && <ErrorInput text={errors.password.message} />}
        <Button type="submit" text="SIGNIN" />
      </form>
      <p className="text-white">
        Ainda não tem uma conta?{" "}
        <Link to="/signup" className="text-sky-400 hover:text-sky-600">
          Registre-se
        </Link>
      </p>
      <Outlet />
    </div>
  );
}
