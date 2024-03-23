"use client";

import { handleLogOut } from "@/app/dashboard/actions";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface LinkListProps {
  jwt?: string;
}

const LinkList = ({ jwt }: LinkListProps) => {
  const pathname = usePathname();
  const links = [
    {
      href: "/login",
      label: "Log in",
      protected: false,
      active: pathname === "/login",
    },
    {
      href: "/register",
      label: "Register",
      protected: false,
      active: pathname === "/register",
    },
    {
      href: "/",
      label: "Log out",
      protected: true,
      active: pathname === "/logout",
      logout: true,
    },
    {
      href: "/dashboard",
      label: "Dashboard",
      protected: true,
      active: pathname === "/dashboard",
    },
  ];

  const classnameActive = "text-white hover:text-white/80";
  const classnameUnactive = "text-white/70 hover:text-white";

  const onDelete = async () => {
    // here I should use a ues or no modal "dialog" but its a simple project
    const res = await handleLogOut();
    console.log(res);
    useRouter().push('/');
  }

  return (
    <div className="flex justify-between w-full">
      <Link
        href={"/"}
        className={pathname === "/" ? classnameActive : classnameUnactive}
      >
        Home
      </Link>

      <div className="flex space-x-8">
        {links.map((link) => {
          if (jwt && link.protected) {
            if (link.logout) {
              return (
                <form action={onDelete}>
                  <button
                    className={
                      link.active ? classnameActive : classnameUnactive
                    }
                    type="submit"
                  >
                    {link.label}
                  </button>
                </form>
              );
            }

            return (
              <Link
                key={link.href}
                className={link.active ? classnameActive : classnameUnactive}
                href={link.href}
              >
                {" "}
                {link.label}{" "}
              </Link>
            );
          } else if (!jwt && !link.protected) {
            return (
              <Link
                key={link.href}
                className={link.active ? classnameActive : classnameUnactive}
                href={link.href}
              >
                {" "}
                {link.label}{" "}
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
};

export default LinkList;
