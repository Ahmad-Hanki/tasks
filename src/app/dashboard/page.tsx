import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { getData } from "./getData";

const DashboardPage = async () => {
  const dataFunction = await getData();

  const data = dataFunction.data;


  return (
    <section className="bg-gray-500">
      <div className="max-w-4xl mx-auto p-7 space-y-10">
        <div className="grid grid-cols-1 border border-black">
          {data.map((item: any, i: number) => {
            return (
              <Link
                key={i}
                href={`/dashboard/${item.order}`}
                className="p-5 mx-auto hover:text-slate-300"
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
