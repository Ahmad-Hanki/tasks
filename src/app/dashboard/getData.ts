import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getData = async () => {
  const cookie = cookies();
  const jwt = cookie.get("token");

  if (!jwt) {
    return redirect("/login");
  }

  const res = await axios.get(
    "https://api.management.parse25proje.link/api/boards",
    {
      headers: {
        Authorization: `Bearer ${jwt.value}`,
      },
    }
  );

  return await res.data;
};

export const getSingleData = async (taskId: number) => {
  const cookie = cookies();
  const jwt = cookie.get("token");

  if (!jwt) {
    return redirect("/login");
  }

  const res = await axios.get(
    "https://api.management.parse25proje.link/api/boards",
    {
      headers: {
        Authorization: `Bearer ${jwt.value}`,
      },
    }
  );

  const data = await res.data.data.find((i: any) => {
    return i.id == taskId;
  });

  if (!data) return redirect("/dashboard");

  return data;
};
