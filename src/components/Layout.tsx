import React from "react";
import { useStore } from "../hooks/use-store";
import { useSidebarToogle } from "../hooks/use-sidebar-toggle";
import { cn } from "../lib/utils";
import Sidebar from "./Sidebar";
import { Footer } from "./Footer";

export default function Layout({
  children
} : {children : React.ReactNode;}
){ 
  const sidebar = useStore(useSidebarToogle, (state) => state);

  if(!sidebar) return null;

  return(
    <>
      <Sidebar />
      <main
        className={cn(
          "min-h-[calc(100vh_-_56px)] bg-zinc-50 dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300",
          sidebar?.isOpen === false ? "lg:ml-[90px]" : "lg:ml-72"
        )}
      >
        {children}
      </main>
      <footer
        className={cn(
          "transition-[margin-left] ease-in-out duration-300",
          sidebar?.isOpen === false ? "lg:ml-[90px]" : "lg:ml-72"
        )}
      >
        <Footer />
      </footer>
    </>
  )

}

