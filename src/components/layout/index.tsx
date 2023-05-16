import { ReactNode } from "react";
import Meta from "./meta";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

export default function Layout({
  meta,
  children,
}: {
  meta?: {
    title?: string;
    description?: string;
  };
  children: ReactNode;
}) {

  return (
    <>
      <Meta {...meta} />
      <Navbar />
      <Sidebar />

      <main className="bg-slate-200 flex w-full flex-col items-center justify-center py-32">
        {children}
      </main>
    </>
  );
}
