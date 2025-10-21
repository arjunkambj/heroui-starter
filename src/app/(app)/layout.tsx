import type { ReactNode } from "react";

import AppHeroUIProvider from "@/components/HeroUIProvider";
import DashboardSidebar from "@/components/layout/DashboardSidebar";
import SidebarToggle from "@/components/layout/SidebarToggle";

interface DappLayoutProps {
  children: ReactNode;
}

export default function DappLayout({ children }: DappLayoutProps) {
  return (
    <AppHeroUIProvider>
      <div className="flex max-h-dvh h-dvh bg-content1 text-foreground">
        <DashboardSidebar className="border-r border-default-200/50 bg-content1" />
        <div className="flex flex-1 flex-col">
          <header className="sticky flex items-center justify-between bg-content1 px-6 py-4">
            <SidebarToggle />
          </header>
          <main className="flex flex-1 flex-col gap-6 px-4 py-8 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </AppHeroUIProvider>
  );
}
