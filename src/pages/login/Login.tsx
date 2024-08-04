import { useForm } from "react-hook-form"

interface IFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<IFormData>({ mode: "onChange" });

  const onSubmit = (data: IFormData) => {
    console.log(data);
  }

  return (
    <section className="bg-white max-w-[400px] mx-auto p-[50px] rounded-xl">
      <h1 className="text-center text-2xl font-bold text-gray-800 mb-7">Вход в аккаунт</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="w-full p-[15px] border border:#CACACA"
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Укажите почту",
          })}
        />
        <div className="text-red-600">{errors.email?.message}</div>
        <input
          className="w-full p-[15px] border border:#CACACA mt-5"
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Укажите пароль",
            minLength: { value: 6, message: "Пароль должен быть не менее 6 символов" }
          })}
        />
        <div className="text-red-600">{errors.password?.message}</div>
        <button
          disabled={!isValid}
          type="submit"
          className={`mt-5 text-white bg-default w-full p-[8px] ${!isValid ? 'bg-opacity-50' : null}`}
        >
          Войти
        </button>
      </form>
    </section>
  )
}

export default Login;