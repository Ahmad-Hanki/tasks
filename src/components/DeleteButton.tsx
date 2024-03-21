"use client";
import { useFormStatus } from "react-dom";
const DeleteButton = () => {
  const { pending } = useFormStatus();

  let content;

  if (!pending) {
    content = (
      <button className="p-3 px-8 bg-rose-700 rounded-xl" type="submit">
        Delete
      </button>
    );
  } else {
    content = (
      <button
        disabled
        className=" p-3 px-8 bg-gray-700 rounded-xl"
        type="submit"
      >
        Deleting...
      </button>
    );
  }

  return content;
};

export default DeleteButton;
