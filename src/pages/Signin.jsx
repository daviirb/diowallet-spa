import logo from "../assets/logo.png";
import Button from "../components/Button";
import Input from "../components/Input";

export default function Signin() {
  return (
    <div className="flex flex-col items-center justify-around rounded p-8 w-[32rem] h-[32rem] bg-zinc-900 ">
      <img src={logo} alt="" className="w-44" />
      <form className="flex flex-col justify-center w-full gap-2">
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button type="submit" text="SIGNIN" />
      </form>
      <p className="text-white">Ainda não tem uma conta? Registre-se</p>
    </div>
  );
}
