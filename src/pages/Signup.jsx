import Button from "../components/Button";
import Input from "../components/Input";
import logo from "../assets/logo.png";
import { BiArrowBack } from "react-icons/bi";
import { Link, Outlet } from "react-router-dom";

export default function Signup() {
  return (
    <div className="flex flex-col items-center justify-around rounded p-8 w-[32rem] h-[32rem] relative bg-zinc-900 ">
      <img src={logo} alt="" className="w-44" />
      <Link to="/signin">
        <BiArrowBack className="absolute top-3 left-3 text-white text-xl hover:text-sky-600" />
      </Link>
      <form className="flex flex-col justify-center w-full gap-2">
        <Input type="text" placeholder="Nome Completo" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Senha" />
        <Input type="password" placeholder="Confirme a Senha" />
        <Button type="submit" text="SIGNUP" />
      </form>
      <Outlet />
    </div>
  );
}
