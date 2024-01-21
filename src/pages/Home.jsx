/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useNavigate } from "react-router-dom";
import { GoSignOut } from "react-icons/go";
import Button from "../components/Button";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { userLogged } from "../services/user";
import { findAllTransaction } from "../services/transactions";
import { FaGoogleWallet } from "react-icons/fa";

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

  async function getAllTransactions() {
    try {
      const response = await findAllTransaction();
      setTransactions(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    validateToken();
    getUserLogged();
    getAllTransactions();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center rounded w-[60rem] h-[35rem] p-8 bg-zinc-900">
      <header className="flex flex-row items-center justify-between w-full">
        <FaGoogleWallet className="text-[3rem] text-sky-500" />
        <div className="flex flex-row items-center gap-4">
          <p className="text-white">Olá, {user.name}</p>
          <Link to="/signin">
            <GoSignOut className="text-center text-white text-xl hover:text-sky-600" />
          </Link>
        </div>
      </header>
      <section className="flex flex-col items-center justify-center w-full h-full rounded mt-1 bg-zinc-200">
        {transactions.length ? (
          transactions
        ) : (
          <p>Nenhuma transação identificada</p>
        )}
      </section>
      <footer className="flex w-full gap-2 pt-2 text-lg font-bold">
        <Button
          type="button"
          text="Nova Entrada"
          icon="plus"
          transaction="input"
        />
        <Button
          type="button"
          text="Nova Saída"
          icon="minus"
          transaction="output"
        />
      </footer>
    </div>
  );
}
