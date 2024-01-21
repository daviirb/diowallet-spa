import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import Button from "../components/Button";
import ErrorInput from "../components/ErrorInput";
import Input from "../components/Input";
import { signupSchema } from "../schemas/SignupSchema";
import { signup } from "../services/user";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signupSchema) });

  const navigate = useNavigate();

  async function handleSubmitForm(data) {
    try {
      await signup(data);
      navigate("/signin");
    } catch (error) {
      console.log(error.response.data);
    }
  }

  return (
    <div className="flex flex-col items-center justify-around rounded p-8 w-[32rem] h-[32rem] relative bg-zinc-900 ">
      <img src={logo} alt="" className="w-44" />
      <Link to="/signin">
        <BiArrowBack className="absolute top-3 left-3 text-white text-xl hover:text-sky-600" />
      </Link>
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="flex flex-col justify-center w-full gap-2"
      >
        <Input
          type="text"
          placeholder="Nome Completo"
          register={register}
          name="name"
        />
        {errors.name && <ErrorInput text={errors.name.message} />}
        <Input
          type="email"
          placeholder="Email"
          register={register}
          name="email"
        />
        {errors.email && <ErrorInput text={errors.email.message} />}
        <Input
          type="password"
          placeholder="Senha"
          register={register}
          name="password"
        />
        {errors.password && <ErrorInput text={errors.password.message} />}
        <Input
          type="password"
          placeholder="Confirme a Senha"
          register={register}
          name="confirmPassword"
        />
        {errors.confirmPassword && (
          <ErrorInput text={errors.confirmPassword.message} />
        )}
        <Button type="submit" text="SIGNUP" />
      </form>
      <Outlet />
    </div>
  );
}
