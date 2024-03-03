import Link from "next/link";
import React from "react";
import { UserButton, currentUser } from "@clerk/nextjs";

const layout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const user = await currentUser();

  const firstName = user?.firstName;
  const email = user?.emailAddresses[0]?.emailAddress;

  return (
    <main className="flex min-h-screen flex-row">
      {/* sidebar */}
      <aside className="w-64 border-r border-slate-900 flex flex-col p-4">
        <span className="text-xs text-slate-500 font-medium">Dashboard</span>

        <button className="border-0 text-sm font-medium text-left hover:underline decoration-solid mt-4">
          + add new note
        </button>

        <ul className="space-y-2 mt-4 text-sm font-medium">
          <li className="truncate hover:underline decoration-solid">
            <Link href={"/dashboard/item1/notes"}>🗺️ world map</Link>
          </li>
          <li className="truncate hover:underline decoration-solid">
            <Link href={"/dashboard/item2/notes"}>
              🧰 how to create a magic funnels to instagram
            </Link>
          </li>
          <li className="truncate hover:underline decoration-solid">
            <Link href={"/dashboard/item3/notes"}>🌀 top funels</Link>
          </li>
        </ul>

        <footer className="mt-auto">
          <span className="text-xs text-slate-500 font-medium">Profile</span>
          <div className="mt-4 flex flex-row items-center">
            <UserButton afterSignOutUrl="/" />
            <div className="ml-4 flex flex-col">
              <span className="text-sm font-medium">{firstName}</span>
              <span className="text-xs text-slate-500">{email}</span>
            </div>
          </div>
        </footer>
      </aside>

      {/* content */}
      {children}
    </main>
  );
};

export default layout;
