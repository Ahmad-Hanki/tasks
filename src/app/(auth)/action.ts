"use server";

import axios from "axios";
import { cookies } from "next/headers";
export const handleRegister = async (formData: FormData) => {
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  // here, we should bcrypt the password but its just a simple form.
  // we also should check for the data validations.
  const data = {
    fullName: name,
    email,
    password,
  };

  try {
    const res = await axios.post(
      "https://api.management.parse25proje.link/api/auth/register",
      data
    );
    console.log(res.data);

    return await res.data;
  } catch (error) {
    console.error("Registration failed:", error);
  }
};

export const handleLogin = async (formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  const data = {
    email,
    password,
  };

  try {
    const res = await axios.post(
      "https://api.management.parse25proje.link/api/auth/login",
      data
    );

    
    return await res.data;
  } catch (err) {
    console.log(err);
  }
};
