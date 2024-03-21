import axios from "axios";
import { cookies } from "next/headers";

export default async function Home() {

  let content;
  const cookie = cookies()
  const jwt = cookie.get('token');
  
  if (!jwt?.value) {
    content = (
      <div className="font-bold text-xl">
        <p className="text-center">Please sign in to display your data</p>
      </div>
    )
  }
  else {
  const res = await axios.get(  "https://api.management.parse25proje.link/api/auth/profile",
  {
     headers: {
       Authorization: `Bearer ${jwt.value}`,
     },
   });
   const data = await res.data.data
   content = (
    <div className="w-full flex flex-col items-center gap-10">
      <p>Full Name: <span className="font-bold text-red-400">{data.fullName}</span></p>
      <p>E-mail: <span className="font-bold text-red-400">{data.email}</span></p>
    </div>
   )
  }


  return (
    <main className="">
      <section className="max-w-4xl mx-auto p-7">
        {content}
      </section>
    </main>
  );
}
