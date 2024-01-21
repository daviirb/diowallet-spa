import { BiArrowBack } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import { transactionSchema } from "../schemas/transactionSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorInput from "../components/ErrorInput";
import Input from "../components/Input";
import Button from "../components/Button";

export default function NewTransaction() {
  const { type } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(transactionSchema) });

  function onSubmitForm(data) {
    console.log(data);
  }

  return (
    <div className="flex flex-col items-center justify-around bg-zinc-900 rounded p-8 gap-7 relative">
      <header>
        <Link to="/">
          <BiArrowBack className="text-white absolute top-3 left-3 text-2xl" />
        </Link>
        <h1 className="text-white font-bold text-3xl">New {type}</h1>
      </header>
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="flex flex-col justify-center gap-4 w-full"
      >
        <Input
          type="number"
          placeholder="Valor"
          step={0.01}
          register={register}
          name="value"
        />
        {errors.value && <ErrorInput text={errors.value.message} />}
        <Input
          type="text"
          placeholder="Descrição"
          register={register}
          name="description"
        />
        {errors.description && <ErrorInput text={errors.description.message} />}
        <Button type="submit" text="Salvar" />
      </form>
    </div>
  );
}
