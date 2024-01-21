// eslint-disable-next-line react/prop-types
export default function Input({ type, placeholder, register, name, step }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      step={step}
      className="rounded p-2 w-full"
      {...register(name)}
    />
  );
}
