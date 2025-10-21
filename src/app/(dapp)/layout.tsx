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
      <div className="flex min-h-screen bg-content1 text-foreground">
        <DashboardSidebar className="h-full md:border-r md:border-default-200 md:bg-content2/95 md:px-0 md:py-6" />
        <div className="flex flex-1 flex-col">
          <header className="sticky top-0 z-10 flex items-center justify-between border-b border-default-200 bg-content1/70 px-6 py-4 backdrop-blur-md">
            <SidebarToggle />
            <span className="text-sm font-medium text-default-500">
              Operations dashboard preview
            </span>
          </header>
          <main className="flex flex-1 flex-col gap-6 px-6 py-8">{children}</main>
        </div>
      </div>
    </AppHeroUIProvider>
  );
}
