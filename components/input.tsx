import type { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  label: string;
  name: string;
  kind?: "text" | "phone" | "price";
  register: UseFormRegisterReturn;
  type: string;
  required?: boolean;
  //확장성을 위하여
  [key: string]: any;
}

export default function Input({
  label,
  name,
  kind = "text",
  type,
  register,
  required,
  ...rest
}: InputProps) {
  return (
    <div>
      <label htmlFor={name} className='text-sm font-medium text-gray-700'>
        {label}
      </label>
      {kind === "text" ? (
        <div>
          <input
            id={name}
            {...register}
            type={type}
            className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-md plachoder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 '
            required={required}
          />
        </div>
      ) : null}
      {kind === "phone" ? (
        <div className='flex rounded-md shadow-md'>
          <span className='flex items-center justify-center border border-gray-300 px-3 py-2 border-r-0 rounded-l-md shadow-md bg-slate-100'>
            +82
          </span>
          <input
            id={name}
            {...register}
            type={type}
            required={required}
            className='w-full px-3 py-2 border border-gray-300 rounded-md rounded-l-none shadow-md plachoder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 '
          />
        </div>
      ) : null}
    </div>
  );
}
