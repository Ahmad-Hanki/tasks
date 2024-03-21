import SubmitButton from "@/components/SubmitButton";
import { handleLogin } from "../action";
const LoginPage = () => {
  //should've check for validation but
  // no checking, just a simple form.

  return (
    <section className="h-[89vh] py-4 w-full">
      <div className="max-w-xl mx-auto py-10">
        <form
          action={handleLogin}
          className="border flex-col flex gap-5 w-full p-10"
        >
          <p className="text-center font-bold text-xl pb-2">Login Form</p>
          <input
            type="email"
            className="rounded-lg p-2 text-black "
            placeholder="E-mail"
            name="email"
          />
          <input
            type="password"
            className="rounded-lg p-2 text-black "
            placeholder="Password"
            name="password"
          />
          <div className="flex ">
            <SubmitButton />
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
