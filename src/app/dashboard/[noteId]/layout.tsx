"use client";

import Link from "next/link";
import React, { useState } from "react";

type MenuItem = "notes" | "chart-flow" | "content" | "questions";

const menuItems: MenuItem[] = ["notes", "chart-flow", "content", "questions"];

const Layout = ({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { noteId: string };
}>) => {
  const [itemSelected, setItemSelected] = useState<MenuItem>("notes");

  return (
    <main className="flex min-h-screen flex-col flex-1">
      <header className="flex flex-row items-center justify-between p-4 border-b border-slate-900">
        <h1 className="text-xl font-medium">{params.noteId}</h1>

        <div className="flex flex-row items-center space-x-8 text-xs font-regular text-slate-500">
          {menuItems.map((item) => (
            <Link
              className={`${
                itemSelected === item ? "font-bold text-white" : ""
              }`}
              onClick={() => {
                setItemSelected(item);
              }}
              key={item}
              href={`/dashboard/${params.noteId}/${item}`}
            >
              {item}
            </Link>
          ))}
        </div>
      </header>
      {children}
    </main>
  );
};

export default Layout;
