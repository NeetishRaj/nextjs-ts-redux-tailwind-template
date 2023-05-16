import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import Meta from "./meta";

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
      <main className="flex w-full flex-col items-center justify-center py-32">
        {children}
      </main>
    </>
  );
}
