import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "@components/input";
import UploadButton from "@components/UploadButton";
import useMutation from "@libs/client/useMutation";
import { cls } from "@libs/utils";

interface EnterFormProps {
  phone?: string;
  email?: string;
}

interface TokenFormProps {
  token: string;
}

interface MutationResult {
  ok: boolean;
}

function Enter() {
  const [enter, { loading, error, data }] =
    useMutation<MutationResult>("/api/users/enter");
  const [confirmToken, { loading: tokenLoading, data: tokenData }] =
    useMutation("/api/users/confirm");
  const { register, handleSubmit, reset } = useForm<EnterFormProps>();
  const { register: tokenRegister, handleSubmit: tokenHandleSubmit } =
    useForm<TokenFormProps>();
  const [method, setMethod] = useState<"email" | "phone">("phone");

  const onPhoneOrEmailClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const emailTab = (event.target as Element).classList.contains("email");
    reset();
    emailTab ? setMethod("email") : setMethod("phone");
  };

  const onValid = (formData: EnterFormProps) => {
    if (loading) return;
    enter(formData);
  };
  const onTokenValid = (validForm: TokenFormProps) => {
    if (tokenLoading) return;
    confirmToken(validForm);
  };
  console.log(data);
  return (
    <div className='mt-16 px-4'>
      <h3 className='text-center text-3xl font-bold mt-1'>Enter to Carrot</h3>
      <div className='mt-10'>
        {data?.ok ? (
          <form
            onSubmit={tokenHandleSubmit(onTokenValid)}
            className='flex flex-col mt-8'
          >
            <Input
              register={tokenRegister("token", { required: true })}
              name='token'
              kind='text'
              label='confirm token'
              type='text'
            />
            <UploadButton name={loading ? "loading ~ " : "confirm token"} />
          </form>
        ) : (
          <>
            <div className='flex flex-col items-center'>
              <h5 className='text-center font-medium'>Enter using:</h5>
              <div
                className='grid border-b w-full grid-cols-2 mt-8'
                onClick={onPhoneOrEmailClick}
              >
                <button
                  className={cls(
                    "email pb-4 font-medium text-sm border-b-2",
                    method === "email"
                      ? "border-orange-500 text-orange-400"
                      : "border-transparent hover:text-gray-400 text-gray-500"
                  )}
                >
                  Email
                </button>
                <button
                  className={cls(
                    "pb-4 font-medium text-sm border-b-2",
                    method === "phone"
                      ? "border-orange-500"
                      : "border-transparent hover:text-gray-400"
                  )}
                >
                  Phone
                </button>
              </div>
            </div>
            <form
              onSubmit={handleSubmit(onValid)}
              className='flex flex-col mt-8'
            >
              {method === "email" ? (
                <Input
                  register={register("email", { required: true })}
                  name='email'
                  kind='text'
                  label='email'
                  type='email'
                />
              ) : null}
              {method === "phone" ? (
                <Input
                  register={register("phone", { required: true })}
                  name='phone'
                  type='number'
                  kind='phone'
                  label='phone number'
                />
              ) : null}
              <UploadButton
                name={
                  method === "email"
                    ? loading
                      ? "loading"
                      : "Get login link"
                    : loading
                    ? "loading"
                    : "Get one-time password"
                }
              ></UploadButton>
            </form>
          </>
        )}
        <div>
          <div>
            <div>
              <span className='flex justify-center mt-5'>Or enter with</span>
            </div>
          </div>
          <div className='grid grid-cols-2 mt-2 gap-2'>
            <button className='flex justify-center items-center bg-slate-100 shadow-lg rounded-xl py-3 hover:bg-slate-300'>
              <svg
                className='w-5 h-5'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path d='M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84' />
              </svg>
            </button>
            <button className='flex justify-center items-center bg-slate-100 shadow-lg rounded-xl py-3 hover:bg-slate-300'>
              <svg
                className='w-5 h-5'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path
                  fillRule='evenodd'
                  d='M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Enter;
