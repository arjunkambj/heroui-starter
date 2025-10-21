"use client";

import type { PropsWithChildren } from "react";
import { HeroUIProvider as BaseHeroUIProvider } from "@heroui/react";
import { ThemeProvider } from "next-themes";

const AppHeroUIProvider = ({ children }: PropsWithChildren) => (
  <BaseHeroUIProvider>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  </BaseHeroUIProvider>
);

export default AppHeroUIProvider;
