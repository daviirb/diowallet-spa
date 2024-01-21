import { BiPlusCircle, BiMinusCircle } from "react-icons/bi";

// eslint-disable-next-line react/prop-types
export default function Button({ type, text, icon }) {
  if (!icon) icon = "";
  let IconComponent;

  if (icon === "plus") IconComponent = BiPlusCircle;
  if (icon === "minus") IconComponent = BiMinusCircle;

  return (
    <button
      type={type}
      className="px-4 py-2 rounded w-full flex items-center justify-center gap-2 font-bold text-white bg-gradient-to-r from-sky-500 to-indigo-500"
    >
      {IconComponent && <IconComponent />} {text}
    </button>
  );
}
