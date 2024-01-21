/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { GoSignOut } from "react-icons/go";
import Button from "../components/Button";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { userLogged } from "../services/user";

export default function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [transactions, setTransactions] = useState([]);

  function validateToken() {
    const token = Cookies.get("token");
    if (!token) navigate("/signin");
  }

  async function getUserLogged() {
    try {
      const useResponse = await userLogged();
      setUser(useResponse.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getAllTransactions() {}

  useEffect(() => {
    validateToken();
    getUserLogged();
    getAllTransactions();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center rounded w-[60rem] h-[35rem] p-8 bg-zinc-900">
      <header className="flex flex-row items-center justify-between w-full">
        <img src={logo} alt="Logo" className="w-32" />
        <div className="flex flex-row items-center gap-4">
          <p className="text-white">Olá, {user.name.split(" ", [1])}</p>
          <Link to="/signin">
            <GoSignOut className="text-center text-white text-xl hover:text-sky-600" />
          </Link>
        </div>
      </header>
      <section className="flex flex-col items-center justify-center w-full h-full rounded bg-zinc-200">
        <p>Nenhuma transação identificada</p>
      </section>
      <footer className="flex w-full gap-2 pt-2 text-lg font-bold">
        <Button type="button" text="Nova Entrada" icon="plus" />
        <Button type="button" text="Nova Saída" icon="minus" />
      </footer>
    </div>
  );
}
