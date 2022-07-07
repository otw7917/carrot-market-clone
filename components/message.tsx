import { cls } from "@libs/utils";

interface MessageProps {
  message: string;
  isReverse?: boolean;
}

export default function Message({ message, isReverse }: MessageProps) {
  return (
    <div
      className={cls(
        "flex items-start space-x-2",
        isReverse ? "flex-row-reverse space-x-reverse" : ""
      )}
    >
      <div className='w-8 h-8 rounded-full bg-slate-500' />
      <div className='w-1/2 text-sm text-gray-700 p-2 border border-gray-500 rounded-md'>
        {message}
      </div>
    </div>
  );
}
