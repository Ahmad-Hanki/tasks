import SubmitButton from "../../../components/SubmitButton";
import { handleRegister } from "../action";
const RegisterPage = () => {
  // no checking, just a simple form.

  return (
    <section className="h-[89vh] py-4 w-full">
      <div className="max-w-xl mx-auto py-10">
        <form
          action={handleRegister}
          className="border flex-col flex gap-5 w-full p-10"
        >
          <p className="text-center font-bold text-xl pb-2">Register Form</p>
          <input
            type="text"
            className="rounded-lg p-2 text-black "
            placeholder="Full Name"
            name="name"
          />
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

export default RegisterPage;
