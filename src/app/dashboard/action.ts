"use server";

import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function handleAddTask(formData: FormData) {
  const cookie = cookies();
  const jwt = cookie.get("token");

  if (!jwt) {
    return redirect("/login");
  }

  const name = formData.get("name");
  const description = formData.get("description");
  const boardId = +formData.get("boardId")!;
  const flagId = +formData.get("flagId")!;
  const startDate = formData.get("startDate")?.toString();
  const endDate = formData.get("endDate")?.toString();

  const data = {
    name,
    description,
    boardId,
    flagId,
    startDate,
    endDate,
  };

  const res = await axios.post(
    "https://api.management.parse25proje.link/api/tasks",
    data,
    {
      headers: {
        Authorization: `Bearer ${jwt.value}`,
      },
    }
  );

  const resData = await res.data;

  redirect("/dashboard");

  // for the user experience i would use a toaster.
  // but its just a dummy project
}


