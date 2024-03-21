"use client";
import { useFormStatus } from "react-dom";
const SubmitButton = () => {
  const { pending } = useFormStatus();

  let content;

  if (!pending) {
    content = (
      <button
        className="mt-2 p-2 px-5 bg-slate-700 hover:bg-slate-700/90 mx-auto rounded-xl text-xl"
        type="submit"
      >
        Submit
      </button>
    );
  } else {
    <button
      disabled
      className=" mt-2 p-2 px-5 bg-slate-700 hover:bg-slate-700/90 mx-auto rounded-xl text-xl"
      type="submit"
    >
      <span className="w-4 h-4 animate-spin">🔃</span>Submitting...
    </button>;
  }

  return content;
};

export default SubmitButton;
