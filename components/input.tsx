interface InputProps {
  label: string;
  name: string;
  kind?: "text" | "phone" | "price";
  [key: string]: any;
}

export default function Input({
  label,
  name,
  kind = "text",
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
            id='input'
            type='email'
            className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-md plachoder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 '
            required
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
            {...rest}
            className='w-full px-3 py-2 border border-gray-300 rounded-md rounded-l-none shadow-md plachoder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 '
            required
          />
        </div>
      ) : null}
    </div>
  );
}
