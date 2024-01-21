import { Link, Outlet } from "react-router-dom";
import { FaGoogleWallet } from "react-icons/fa";
import Button from "../components/Button";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorInput from "../components/ErrorInput";
import { signinSchema } from "../schemas/SigninSchema";
import { useNavigate } from "react-router-dom";
import { signin } from "../services/user";
import Cookies from "js-cookie";
import { useEffect } from "react";

export default function Signin() {
  useEffect(() => {
    Cookies.remove("token");
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signinSchema) });

  const navigate = useNavigate();

  async function handleSubmitForm(data) {
    try {
      const token = await signin(data);
      Cookies.set("token", token.data, { expires: 1 });
      navigate("/");
    } catch (error) {
      console.log(error.response.data);
    }
  }

  return (
    <div className="flex flex-col items-center justify-around rounded p-8 w-[32rem] h-[32rem] bg-zinc-900 ">
      <FaGoogleWallet className="text-[8rem] text-sky-500" />
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
