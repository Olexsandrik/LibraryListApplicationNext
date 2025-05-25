import { Header } from "@/components/Header";
import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="relative flex flex-col-reverse text-light-100 sm:flex-row">
      <div className="mx-auto max-w-7-xl">
           <Header />
        <div className="mt-20 pb-20">{children}</div>
      </div>
    </main>
  );
}
