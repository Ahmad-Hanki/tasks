import { cookies } from "next/headers";
import Link from "next/link";
import LinkList from "./LinkList";

const MainNav = () => {
  const cookie = cookies();

  return (
    <header className="bg-slate-700 p-7 ">
      <section className="max-w-4xl mx-auto flex justify-between items-center ">
        <LinkList jwt={cookie.get('token')?.value}/>
      </section>
    </header>
  );
};

export default MainNav;
