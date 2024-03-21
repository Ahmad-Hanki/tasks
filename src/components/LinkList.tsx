"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkListProps {
  jwt?: string;
}

const LinkList = ({ jwt }: LinkListProps) => {
    console.log(jwt,  'from nav')
  const pathname = usePathname();
  console.log(pathname);
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
      href: "/logout",
      label: "Log out",
      protected: true,
      active: pathname === "/logout",
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
            return (
              <Link
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
