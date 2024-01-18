import logo from "../assets/logo.png";

export default function Signin() {
  return (
    <div className="flex flex-col items-center justify-around rounded p-8 w-[32rem] h-[32rem] bg-zinc-900 ">
      <img src={logo} alt="" className="w-44" />
      <form className="flex flex-col justify-center w-full gap-2">
        <input
          type="email"
          placeholder="Email"
          className="rounded p-2 w-full "
        />
        <input
          type="password"
          placeholder="Password"
          className="rounded p-2 w-full "
        />
        <button
          type="submit"
          className="px-4 py-2 rounded w-full font-bold text-white"
        >
          SIGNIN
        </button>
      </form>
      <p className="text-white">Ainda não tem uma conta? Registre-se</p>
    </div>
  );
}
