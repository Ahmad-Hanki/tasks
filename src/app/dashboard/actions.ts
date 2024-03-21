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

  // we must vheck for the validation of the data here, but its a dummy project

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

  redirect("/dashboard/" + boardId);

  // for the user experience i would use a toaster.
  // but its just a dummy project
}

export async function handleUpdateTask(formData: FormData) {

  const cookie = cookies();
  const jwt = cookie.get("token");

  if (!jwt) {
    return redirect("/login");
  }

  const name = formData.get("name");
  const description = formData.get("description");
  const boardId = +formData.get("boardId")!;
  const flagId = +formData.get("flagId")!;
  const startDate = formData.get("startDate");
  const endDate = formData.get("endDate");
  const code = formData.get("code");
  // we need to check for the data but its a dummy project

  const data = {
    name,
    description,
    boardId,
    flagId,
    startDate,
    endDate,
  };

  const res = await axios.put(`https://api.management.parse25proje.link/api/tasks/${code}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${jwt.value}`,
      },
    }
  );

  
  redirect("/dashboard/" + boardId);

}


export async function handleDeleteTask(formData: FormData) {
  const cookie = cookies();
  const jwt = cookie.get("token");

  if (!jwt) {
    return redirect("/login");
  }

  const code = formData.get('code');
  const boardId = formData.get('borderId');
    // we need to check for the data but its a dummy project

  const res = await axios.delete(`https://api.management.parse25proje.link/api/tasks/${code}`,
    {
      headers: {
        Authorization: `Bearer ${jwt.value}`,
      },
    }
  );

  redirect("/dashboard/" + boardId);
}


